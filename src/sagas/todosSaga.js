import axios from 'axios';
import { put, all, takeLatest, call } from "redux-saga/effects";


import { postTypes } from '../redux/actionsTypes/postTypes';
import { createTodoFailure, createTodoSuccess, deleteTodoFailure, deleteTodoSuccess, fetchTodosFailure, fetchTodosSuccess, switchTodoFailure, switchTodoSuccess } from '../redux/actions/postActions';

const getPosts = () => axios.get(process.env.REACT_APP_TODOS_URL);
const switchTodoCompleted = (id) => axios.put(`${process.env.REACT_APP_TODOS_URL}/${id}`);
const createTodo = (todo) => axios({
  method: 'POST',
  withCredentials: false,
  mode: 'no-cors',
  url: process.env.REACT_APP_TODOS_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
  data: {
  userId: 1,
  title: todo
}});
const deleteTodo = (id) => axios.delete(`${process.env.REACT_APP_TODOS_URL}/${id}`);

function* fetchTodosSaga() {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchTodosSuccess({
        posts: response.data
      })
    )
  } catch (e) {
    yield put(
      fetchTodosFailure({
        error: e.message || 'Unexpected error'
      })
    )
  }
}

function* switchTodoSaga({ payload }) {
  try {
    const response = yield call(switchTodoCompleted, payload)
    yield put(
      switchTodoSuccess({
        postUpdated: response.data
      })
    )
  } catch (e) {
    yield put(
      switchTodoFailure({
        error: e.message || 'Update failed'
      })
    )
  }
}

function* createTodoSaga({ payload }) {
  try {
    const response = yield call(createTodo, payload)
    yield put(
      createTodoSuccess({
        postUpdated: response.data
      })
    )
  } catch (e) {
    yield put(
      createTodoFailure({
        error: e.message || 'Update failed'
      })
    )
  }
}

function* deleteTodoSaga({ payload }) {
  try {
    const response = yield call(deleteTodo, payload)
    yield put(
      deleteTodoSuccess(payload)
    )
  } catch (e) {
    yield put(
      deleteTodoFailure({
        error: e.message || 'Update failed'
      })
    )
  }
}

function* todosSaga() {
  yield all([
    takeLatest(postTypes.FETCH_POST_REQUEST, fetchTodosSaga),
    takeLatest(postTypes.SWITCH_COMPLETED_REQUEST, switchTodoSaga),
    takeLatest(postTypes.CREATE_TODO_REQUEST, createTodoSaga),
    takeLatest(postTypes.DELETE_TODO_REQUEST, deleteTodoSaga)
  ]);
};

export default todosSaga;