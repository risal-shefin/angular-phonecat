"use strict";
class PhoneDetailController {
    constructor($routeParams, phone) {
        this.mainImageUrl = '';
        const phoneId = $routeParams['phoneId'];
        phone.get(phoneId).subscribe((data) => {
            this.phone = data;
            this.setImage(data.images[0]);
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