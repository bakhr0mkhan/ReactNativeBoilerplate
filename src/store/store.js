import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import MySaga from './sagas/index';
import RootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['posts'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const sagaMiddleware = createSagaMiddleware();
const Store = () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(MySaga);
  const persistor = persistStore(store);
  return {store, persistor};
};
export default Store;
