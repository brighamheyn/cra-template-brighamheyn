import { BatchAction } from 'redux-batched-actions';

import { Command, Handler, batch } from 'api';
import { CounterState, CounterActions, Increment, Decrement} from 'store/counter';

export const increment: Command<Increment, void> = (step: number) => {
    return (dispatch: Handler<Increment>, getState: () => CounterState, e: null): void => {
        dispatch({type: CounterActions.increment, step} as Increment);
    }
}

export const decrement: Command<Decrement, void> = (step: number) => {
    return (dispatch: Handler<Decrement>, getState: () => CounterState, e: null): void => {
        dispatch({type: CounterActions.decrement, step} as Decrement);
    }
}

export const random: Command<BatchAction, void> = (size: number = 5) => {

    let incr = Math.floor(Math.random() * size);
    let decr = Math.floor(Math.random() * size);

    return (dispatch: Handler<BatchAction>, getState: () => CounterState, e: null): void => {

        let actions = [incr, decr];

        dispatch(batch(actions));
    }
}

export const incrementAsync: Command<Increment, Promise<void>> = (step: number) => {
    return async (dispatch: Handler<Increment>, getState: () => CounterState, e: null): Promise<void> => {
        dispatch({type: CounterActions.increment, step} as Increment);
    }
}