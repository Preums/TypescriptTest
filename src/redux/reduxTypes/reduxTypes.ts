import { Post } from "../../models/modelsTypes";
import { postTypes } from "../actionsTypes/postTypes";


export interface PostsState {
  pending: boolean;
  posts: Post[];
  error: string | null;
}

export interface FetchTodosSuccessPayload {
  posts: Post[]
}

export interface FetchTodosFailurePayload {
  error: string;
}

export interface FetchTodosRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
};

export type FetchTodosSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchTodosSuccessPayload;
};

export type FetchTodosFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchTodosFailurePayload;
};

export type SwitchTodoRequest = {
  type: typeof postTypes.SWITCH_COMPLETED_REQUEST;
  payload: number
}

export type SwitchTodoSuccess = {
  type: typeof postTypes.SWITCH_COMPLETED_SUCCESS;
  payload: Post
}

export type SwitchTodoFailure = {
  type: typeof postTypes.SWITCH_COMPLETED_FAILURE;
  payload: FetchTodosFailurePayload
}

export type CreateTodoRequest = {
  type: typeof postTypes.CREATE_TODO_REQUEST;
  payload: string
}

export type CreateTodoSuccess = {
  type: typeof postTypes.CREATE_TODO_SUCCESS;
  payload: Post
}

export type CreateTodoFailure = {
  type: typeof postTypes.CREATE_TODO_FAILURE;
  payload: FetchTodosFailurePayload
}

export type DeleteTodoRequest = {
  type: typeof postTypes.DELETE_TODO_REQUEST;
  payload: number
}

export type DeleteTodoSuccess = {
  type: typeof postTypes.DELETE_TODO_SUCCESS;
  payload: Post
}

export type DeleteTodoFailure = {
  type: typeof postTypes.DELETE_TODO_FAILURE;
  payload: FetchTodosFailurePayload
}

export type PostsActions = FetchTodosRequest | FetchTodosSuccess | FetchTodosFailure;
