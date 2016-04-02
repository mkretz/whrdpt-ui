import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class ConfigService {

    constructor(private http: Http) {
    }

    public getAppConfig() {
        return this.http.get('/config/conf.json')
            .map(res => res.json());
    }
}