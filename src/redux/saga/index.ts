import { all } from 'redux-saga/effects';
import { todoWatcher } from './todo';
import { userWatcher } from './user';

export function* rootWatcher() {
  yield all([todoWatcher(), userWatcher()]);
}
