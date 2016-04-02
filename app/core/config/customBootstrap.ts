import {Type, isPresent, CONST_EXPR} from 'angular2/src/facade/lang';
import {
    BROWSER_PROVIDERS,
    BROWSER_APP_COMMON_PROVIDERS
} from 'angular2/src/platform/browser_common';
import {COMPILER_PROVIDERS} from 'angular2/compiler';
import {ReflectionCapabilities} from 'angular2/src/core/reflection/reflection_capabilities';
import {XHRImpl} from "angular2/src/platform/browser/xhr_impl";
import {XHR} from 'angular2/compiler';
import {Provider} from 'angular2/src/core/di';
import {ComponentRef, platform, reflector} from 'angular2/core';


export const BROWSER_APP_PROVIDERS: Array<any /*Type | Provider | any[]*/> = CONST_EXPR([
    BROWSER_APP_COMMON_PROVIDERS,
    COMPILER_PROVIDERS,
    new Provider(XHR, {useClass: XHRImpl}),
]);

import {HTTP_PROVIDERS} from 'angular2/http';
import {ConfigService} from './config.service.ts';

export function customBoostrap(appComponentType, customProviders) {
    reflector.reflectionCapabilities = new ReflectionCapabilities();
    let appProviders =
        isPresent(customProviders) ? [BROWSER_APP_PROVIDERS, customProviders] : BROWSER_APP_PROVIDERS;
    var app = platform(BROWSER_PROVIDERS).application(appProviders);
    var service = app.injector.get(ConfigService);
    return service.getAppConfig().flatMap((data) => {
        return app.bootstrap(appComponentType, [ new Provider('config', { useValue: data }) ] );
    }).toPromise();

}
