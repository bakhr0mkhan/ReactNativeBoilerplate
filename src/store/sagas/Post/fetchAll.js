import {put, call} from 'redux-saga/effects';
import {fetchAll} from '../../services/Post';
import {
  FETCH_POSTS_RESPONSE as response,
  FETCH_POSTS_FAILURE as failure,
  ENABLE_LOADER_POSTS as enableLoader,
  DISABLE_LOADER_POSTS as disableLoader,
} from '../../types';

function* fetchData(action) {
  yield put({type: enableLoader});
  try {
    const res = yield call(fetchAll, action.payload);
    if (res.status === 200) {
      const {posts} = res.data;
      console.log('SAAGAA:POSTS ');
      console.log(JSON.stringify(posts, null, 2));
      yield put({type: response, payload: {posts}});
    } else {
      console.log('Error in Saga fetch: ', res);
      yield put({
        type: failure,
        payload: {msg: 'Something went wrong. Please try again later'},
      });
    }
  } catch (e) {
    console.log('Error:', e);
    yield put({
      type: failure,
      payload: {msg: 'Something went wrong. Please try again later'},
    });
  }
  yield put({type: disableLoader});
}

export default fetchData;
