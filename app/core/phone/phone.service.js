"use strict";
angular.
    module('core.phone').
    factory('Phone', ['$resource',
    ($resource) => $resource('phones/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: { phoneId: 'phones' },
            isArray: true
        }
    })
]);
//# sourceMappingURL=phone.service.js.map