import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';
import {Login} from './modules/login/index.ts';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [ ],
    directives: [ ],
    pipes: [],
    styles: [],
    template: `
    <header>
        <div class="page-header">
            <h1>whrdpt <small>beta</small></h1>
        </div>
    </header>
    <main>
        <router-outlet></router-outlet>
    </main>

    <footer>

    </footer>
  `
})
@RouteConfig([
    { path: '/', component: Login, name: 'Login' }
])
export class App {
    url: string = 'https://twitter.com/AngularClass';
    constructor() {}
}
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */

