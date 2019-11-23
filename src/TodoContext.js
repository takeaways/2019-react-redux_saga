import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "project1",
    done: true
  },
  {
    id: 2,
    text: "project2",
    done: true
  },
  {
    id: 3,
    text: "project3",
    done: false
  },
  {
    id: 4,
    text: "project4",
    done: true
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      return state.concat(action.todo);
    }
    case "TOGGLE": {
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    }
    case "REMOVE": {
      return state.filter(todo => todo.id !== action.id);
    }
    default:
      throw new Error("Unhandled action");
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  const nextId = useRef(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) throw new Error("Cannot find TodoProvider");
  return context;
};
export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) throw new Error("Cannot find TodoDispatchContext");
  return context;
};
export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);
  if (!context) throw new Error("Cannot find TodoNextIdContext");
  return context;
};
