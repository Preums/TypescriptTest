import { Post } from '../../models/modelsTypes';
import { postTypes } from '../actionsTypes/postTypes';
import {
  CreateTodoFailure,
  CreateTodoRequest,
  CreateTodoSuccess,
  DeleteTodoFailure,
  DeleteTodoRequest,
  DeleteTodoSuccess,
  FetchTodosFailure,
  FetchTodosFailurePayload,
  FetchTodosSuccess,
  FetchTodosSuccessPayload,
  SwitchTodoFailure,
  SwitchTodoRequest,
  SwitchTodoSuccess
} from '../reduxTypes/reduxTypes';

export const fetchTodosRequest = () => ({
  type: postTypes.FETCH_POST_REQUEST
});

export const fetchTodosSuccess = (payload: FetchTodosSuccessPayload): FetchTodosSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload
});

export const fetchTodosFailure = (payload: FetchTodosFailurePayload): FetchTodosFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload
});

export const switchTodosRequest = (payload: number): SwitchTodoRequest => ({
  type: postTypes.SWITCH_COMPLETED_REQUEST,
  payload
})

export const switchTodoSuccess = (payload: Post): SwitchTodoSuccess => ({
  type: postTypes.SWITCH_COMPLETED_SUCCESS,
  payload
})

export const switchTodoFailure = (payload: FetchTodosFailurePayload): SwitchTodoFailure => ({
  type: postTypes.SWITCH_COMPLETED_FAILURE,
  payload
})

export const createTodosRequest = (payload: string): CreateTodoRequest => ({
  type: postTypes.CREATE_TODO_REQUEST,
  payload
})

export const createTodoSuccess = (payload: Post): CreateTodoSuccess => ({
  type: postTypes.CREATE_TODO_SUCCESS,
  payload
})

export const createTodoFailure = (payload: FetchTodosFailurePayload): CreateTodoFailure => ({
  type: postTypes.CREATE_TODO_FAILURE,
  payload
})

export const deleteTodosRequest = (payload: number): DeleteTodoRequest => ({
  type: postTypes.DELETE_TODO_REQUEST,
  payload
})

export const deleteTodoSuccess = (payload: Post): DeleteTodoSuccess => ({
  type: postTypes.DELETE_TODO_SUCCESS,
  payload
})

export const deleteTodoFailure = (payload: FetchTodosFailurePayload): DeleteTodoFailure => ({
  type: postTypes.DELETE_TODO_FAILURE,
  payload
})