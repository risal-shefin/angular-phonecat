"use strict";
class PhoneListController {
    constructor(phone) {
        this.phones = [];
        this.query = '';
        phone.query().subscribe((phones) => {
            this.phones = phones;
        });
        this.orderProp = 'age';
    }
}
PhoneListController.$inject = ['phone'];
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map