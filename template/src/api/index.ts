import { ActionCreator, AnyAction, bindActionCreators } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { batchActions } from 'redux-batched-actions';

import {store, AppState } from 'store';
import * as counter from './counter';

export type Command<A extends AnyAction, R, E = null> = ActionCreator<ThunkAction<R, AppState, E, A>>

export type Handler<A extends AnyAction, E = null> = ThunkDispatch<AppState, E, A>

export const batch = (actions: AnyAction[], type?: string) => {
    return batchActions(actions, type);
}

const services = {
    counter,
};

const createApi = (services: any, dispatch: any) => {

    let boundServices: any = {};
    for (let name in services) {
        boundServices[name] = bindActionCreators(services[name], dispatch);
    }

    return boundServices;
}

export const api = createApi(services, store.dispatch);

export async function get<T>(url: string, params: {[key: string]: any}): Promise<T> {

    let search = new URLSearchParams();
    for (let key in params) {
        search.append(key, params[key]);
    }

    let qs = url + '?' + search.toString();

    return fetch(qs)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
    });
}
