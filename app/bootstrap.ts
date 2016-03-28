import 'reflect-metadata';

import {bootstrap} from 'angular2/platform/browser';
import {DIRECTIVES,PIPES,PROVIDERS} from './core/platform/browser/index';
import {App} from './app';

export function main() {

    return bootstrap(App, [
        ...PROVIDERS,
        ...DIRECTIVES,
        ...PIPES
    ])
        .catch(err => console.error(err));

}

document.addEventListener('DOMContentLoaded', () => main());


