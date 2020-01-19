import { bindActionCreators } from 'redux';

import { store } from 'store';

//import * as services from '...';
const services = {};

function createApi( services: any, dispatch: any ) {

    let boundServices = bindServices(services, dispatch);

    return boundServices;
}

function bindServices( services: any, dispatch: any )
{
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
