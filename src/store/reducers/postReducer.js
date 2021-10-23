import * as types from '../types';

const initialState = {
  all: [],
  loading: false,
  error: null,
  success: false,
};

// @ts-ignore
const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch
    case types.FETCH_POSTS_RESPONSE:
      return {...state, all: action.payload.posts, error: null};
    case types.FETCH_POSTS_FAILURE:
      return {...state, error: action.payload.error};
    // fetch last 10
    // case types.FETCH_POSTS_LAST_RESPONSE:
    //   return {...state, all: action.payload.POSTS, error: null};
    // case types.FETCH_POSTS_LAST_FAILURE:
    //   return {...state, error: action.payload.error};
    // loader
    case types.ENABLE_LOADER_POSTS:
      return {...state, loading: true};
    case types.DISABLE_LOADER_POSTS:
      return {...state, loading: false};
    //   default
    default:
      return state;
  }
};

export default PostReducer;
