"use strict";
class PhoneListController {
    constructor(Phone) {
        this.query = '';
        this.phones = Phone.query();
        this.orderProp = 'age';
    }
}
PhoneListController.$inject = ['Phone'];
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map