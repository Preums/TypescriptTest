import { AnyAction } from "redux";
import { postTypes } from "../actionsTypes/postTypes";
import { PostsState } from "../reduxTypes/reduxTypes";


const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null
};
const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        pending: false,
        posts: action.payload?.posts,
        error: null
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        pending: false,
        posts: [],
        error: action.payload?.error
      };
    case postTypes.SWITCH_COMPLETED_SUCCESS:
      const nextPosts = state.posts.map((post) => post.id === action.payload.postUpdated.id ? action.payload.postUpdated : post)
      return {
        ...state,
        posts: nextPosts
      }
    case postTypes.CREATE_TODO_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload.postUpdated]
      }
    case postTypes.DELETE_TODO_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      }
    default:
      return {
        ...state
      };
  }
};

export default postReducer;