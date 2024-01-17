'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    //template: `<ng-include src="'phone-list/phone-list.template.html'"></ng-include>`,
    template: '<div id="template-container">Loading...</div>',
    controller: ['phone', '$scope', '$templateRequest', '$compile',
      function PhoneListController(phone, $scope, $templateRequest, $compile) {

        var templateUrl = 'phone-list/phone-list.template.html';
        // Use $templateRequest to load the template asynchronously
        $templateRequest(templateUrl).then(function(template) {
          var angularElement = angular.element(template);
          var angularElementContainer = angular.element(document.getElementById('template-container'));
          angularElementContainer.empty();
          angularElementContainer.append($compile(angularElement)($scope));
        });

        phone.query().subscribe(phones => {
          this.phones = phones;
        });
        this.orderProp = 'age';
      }
    ]
  });
