class PhoneDetailController {
  phone: any;
  mainImageUrl: string = '';

  static $inject = ['$routeParams', 'phone'];
  constructor($routeParams: angular.route.IRouteParamsService, phone: any) {
    const phoneId = $routeParams['phoneId'];
    this.phone = phone.get({phoneId}, (phoneData: any) => {
      this.setImage(phoneData.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });