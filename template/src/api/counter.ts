import { AnyAction } from 'redux';
import { BatchAction } from 'redux-batched-actions';

import { AppState } from 'store';
import { Command, Handler, batch } from 'api';
import { CounterActions, Increment, Decrement} from 'store/counter';

export const increment: Command<Increment, void> = (step: number) => {
    return (dispatch: Handler<Increment>, getState: () => AppState, e: null): void => {
        dispatch({type: CounterActions.increment, step} as Increment);
    }
}

export const decrement: Command<Decrement, void> = (step: number) => {
    return (dispatch: Handler<Decrement>, getState: () => AppState, e: null): void => {
        dispatch({type: CounterActions.decrement, step} as Decrement);
    }
}

export const random: Command<BatchAction, void> = (size: number = 5) => {

    let incr = Math.floor(Math.random() * size);
    let decr = Math.floor(Math.random() * size);

    let increment = {type: CounterActions.increment, step: incr} as Increment
    let decrement = {type: CounterActions.decrement, step: decr} as Decrement

    return (dispatch: Handler<BatchAction>, getState: () => AppState, e: null): void => {

        let actions = [increment, decrement] as AnyAction[];

        dispatch(batch(actions));
    }
}

export const incrementAsync: Command<Increment, Promise<void>> = (step: number) => {
    return async (dispatch: Handler<Increment>, getState: () => AppState, e: null): Promise<void> => {
        dispatch({type: CounterActions.increment, step} as Increment);
    }
}