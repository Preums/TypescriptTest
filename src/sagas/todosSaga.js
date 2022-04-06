import { put, all, takeLatest, call } from 'redux-saga/effects';

import { postTypes } from '../redux/actionsTypes/postTypes';
import { createTodo, deleteTodo, getPosts, switchTodoCompleted } from '../services/todoService';
import {
  createTodoFailure,
  createTodoSuccess,
  deleteTodoFailure,
  deleteTodoSuccess,
  fetchTodosFailure,
  fetchTodosSuccess,
  switchTodoFailure,
  switchTodoSuccess
} from '../redux/actions/postActions';

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
    yield call(deleteTodo, payload)
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