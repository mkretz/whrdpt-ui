import 'reflect-metadata';
import 'zone.js';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


import {bootstrap} from 'angular2/platform/browser';
import {PROVIDERS, DIRECTIVES, PIPES} from './core/platform/browser/index.ts';
import {App} from './app.ts';

export function main() {

    return bootstrap(App, [
        ...PROVIDERS,
        ...DIRECTIVES,
        ...PIPES
    ])
        .catch(err => console.error(err));

}

document.addEventListener('DOMContentLoaded', () => main());


