import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import { todoWatcher } from '../saga/todo';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(todoWatcher);
