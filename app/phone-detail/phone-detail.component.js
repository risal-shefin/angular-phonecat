import { __decorate, __metadata, __param } from "tslib";
import { downgradeComponent } from '@angular/upgrade/static';
import { Component, Inject } from '@angular/core';
import { Phone } from '../core/phone/phone.service';
import { RouteParams } from '../ajs-upgraded-providers';
let PhoneDetailComponent = class PhoneDetailComponent {
    constructor(routeParams, phone) {
        phone.get(routeParams['phoneId']).subscribe(data => {
            this.phone = data;
            this.setImage(data.images[0]);
        });
    }
    setImage(imageUrl) {
        this.mainImageUrl = imageUrl;
    }
};
PhoneDetailComponent = __decorate([
    Component({
        selector: 'phone-detail',
        templateUrl: '/app/phone-detail/phone-detail.template.html',
    }),
    __param(0, Inject(RouteParams)),
    __param(1, Inject(Phone)),
    __metadata("design:paramtypes", [RouteParams, Phone])
], PhoneDetailComponent);
export { PhoneDetailComponent };
angular.module('phoneDetail')
    .directive('phoneDetail', downgradeComponent({ component: PhoneDetailComponent }));
//# sourceMappingURL=phone-detail.component.js.map