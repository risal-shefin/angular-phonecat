class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string = '';

  static $inject = ['phone'];
  constructor(phone: any) {
    this.phones = phone.query();
    this.orderProp = 'age';
  }

}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });