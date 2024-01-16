declare const angular: angular.IAngularStatic;
import { downgradeComponent } from '@angular/upgrade/static';

import { Component } from '@angular/core';

import { Phone, PhoneData } from 'app/angular-area/services/phone.service';
import { RouteParams } from 'app/angular-area/ajs-upgraded-providers';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.template.html',
})
export class PhoneDetailComponent {
  phone: any;
  mainImageUrl: string = '';
  showPhoneList: boolean = false;

  constructor(routeParams: RouteParams, phone: Phone) {
    phone.get(routeParams['phoneId']).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }

  togglePhoneList(): void {
    this.showPhoneList = !this.showPhoneList;
  }
}

angular.module('phoneDetail')
  .directive(
    'phoneDetail',
    downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
  );