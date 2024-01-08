export class RouteParams {
}
export function routeParamsFactory(i) {
    return i.get('$routeParams');
}
export const routeParamsProvider = {
    provide: RouteParams,
    useFactory: routeParamsFactory,
    deps: ['$injector']
};
//# sourceMappingURL=ajs-upgraded-providers.js.map