import { all, fork } from 'redux-saga/effects';
import { todoWatcher } from './todo';
import flow from './todo/socket';
import { userWatcher } from './user';

export function* rootWatcher() {
  yield all([fork(flow), todoWatcher(), userWatcher()]);
}
