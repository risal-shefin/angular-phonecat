"use strict";
class PhoneDetailController {
    constructor($routeParams, phone) {
        this.mainImageUrl = '';
        const phoneId = $routeParams['phoneId'];
        this.phone = phone.get({ phoneId }, (phoneData) => {
            this.setImage(phoneData.images[0]);
        });
    }
    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
}
PhoneDetailController.$inject = ['$routeParams', 'phone'];
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map