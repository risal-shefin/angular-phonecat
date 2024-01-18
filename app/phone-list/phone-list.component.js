'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    // not using $templateRequest because of the issue described here: https://github.com/risal-shefin/angularJS-phonecat-to-angular/pull/8
    template: `<ng-include src="'/phone-list/phone-list.template.html'"></ng-include>`,
    controller: ['phone',
      function PhoneListController(phone) {
        this.phones = [];
        phone.queryByPromise().then(phones => {
          this.phones = phones;
        });
        this.orderProp = 'age';
      }
    ]
  });
