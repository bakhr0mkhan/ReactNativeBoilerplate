import {takeLatest} from 'redux-saga/effects';
import * as types from '../types';
import Post from './Post';

function* mySaga() {
  yield takeLatest(types.FETCH_POSTS_REQUEST, Post.fetchAll);
}

export default mySaga;
