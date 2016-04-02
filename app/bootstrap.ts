import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'jquery/dist/jquery.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';


import {customBootstrap} from './core/config/customBootstrap.ts';
import {ConfigService} from './core/config/config.service.ts';
import {bootstrap} from 'angular2/platform/browser';
import {PROVIDERS, DIRECTIVES, PIPES} from './core/platform/browser/index.ts';
import {App} from './app.ts';

export function main() {
    return customBootstrap(App, [
        ...PROVIDERS,
        ...DIRECTIVES,
        ...PIPES,
        ConfigService
    ])
        .catch(err => console.error(err));

}

document.addEventListener('DOMContentLoaded', () => main());


