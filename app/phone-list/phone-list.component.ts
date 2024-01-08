class PhoneListController {
  phones: any[] = [];
  orderProp: string;
  query: string = '';

  static $inject = ['phone'];
  constructor(phone: any) {
    phone.query().subscribe((phones: any[]) => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

}

angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });