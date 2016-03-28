import {Component} from 'angular2/core';
import {Http} from 'angular2/http';

@Component({
    selector: 'login',
    directives: [ ],
    providers: [  ],
    pipes: [ ],
    styles: [ ],
    template: require('./login.html')
})
export class Login {
    // TypeScript public modifiers
    constructor(public http: Http) {
    }

    ngOnInit() {
        console.log('hello Login');
    }

}
