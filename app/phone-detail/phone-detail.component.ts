class PhoneDetailController {
  phone: any;
  mainImageUrl: string = '';

  static $inject = ['$routeParams', 'phone'];
  constructor($routeParams: angular.route.IRouteParamsService, phone: any) {
    const phoneId = $routeParams['phoneId'];
    phone.get(phoneId).subscribe((data: any) => {
      this.phone = data;
      this.setImage(data.images[0]);
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