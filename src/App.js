import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background:#e9ecef;
  }
`;

//saga
import { delay, put, takeEvery, all } from "redux-saga/effects";
function* increaseSaga() {
  yield delay(1000);
  yield put({
    //
    type: "블라블라" // 액션을 디스패치 해라
  });
}

export function* increaseCatch() {
  yield takeEvery("블라블라", increaseSaga); // 액션이되면 등록된 함수를 실행해라
  yield taleLatest("블라블라", increaseSaga);
}

export function* rootSata() {
  yield all([increaseCatch()]); //등록 합치키
}

// -----
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
const samaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
samaMiddleware.run(rootSaga);

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
        <TodoCreate></TodoCreate>
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
