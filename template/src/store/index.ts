import { createStore, applyMiddleware, Reducer, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const middlewares = [thunk];

export interface State
{
    // TODO: Add state
}

export const initialState: State = {

}

export const reducer: Reducer<State, AnyAction> = (state: State = initialState, action: AnyAction) => {

    switch (action.type) {
        default: {
            return state;
        }
    }
}

const batchEnabledReducer = enableBatching(reducer);

export const store = createStore(
    batchEnabledReducer, 
    initialState, 
    applyMiddleware(...middlewares)
)