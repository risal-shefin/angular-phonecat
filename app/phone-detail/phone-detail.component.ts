declare const angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component, Inject } from '@angular/core';

import { Phone, PhoneData } from '../core/phone/phone.service';
import { RouteParams } from '../ajs-upgraded-providers';

@Component({
  selector: 'phone-detail',
  templateUrl: '/app/phone-detail/phone-detail.template.html',
})
export class PhoneDetailComponent {
  phone!: PhoneData;
  mainImageUrl!: string;

  constructor(@Inject(RouteParams) routeParams: RouteParams, @Inject(Phone) phone: Phone) {
    phone.get(routeParams['phoneId']).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.module('phoneDetail')
  .directive(
    'phoneDetail',
    downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
  );