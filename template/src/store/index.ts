import { createStore, applyMiddleware, Reducer, AnyAction, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';
import produce, { Draft } from 'immer';

import * as Counter from './counter'

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const rootReducer = combineReducers({counter: Counter.reducer});

const batchEnabledReducer = enableBatching(rootReducer);

const middlewares = [thunk];

export interface AppState
{
    counter: Counter.CounterState
}

const initialState: AppState = {
    counter: Counter.initialState
}

export const store = createStore(batchEnabledReducer, initialState, applyMiddleware(...middlewares));