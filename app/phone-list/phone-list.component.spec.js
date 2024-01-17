'use strict';

describe('phoneList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('phoneList'));

  // Test the controller
  describe('PhoneListController', function() {
    var $httpBackend, ctrl, mockPhoneService, $http, $q;

    // Create an empty object to mock the phone service and inject it into the provider.
    // We'll implement the mock service later because we should't inject anything
    // before injecting this mock service in the mock module.
    // Otherwise, we'll get "Error: Injector already created, can not register a module!".
    beforeEach(function() {
      mockPhoneService = {
        queryByPromise: function() {}
      };

      angular.mock.module(function($provide) {
        $provide.value("phone", mockPhoneService);
      })
    });

    beforeEach(inject(function($componentController, _$q_, _$http_, _$httpBackend_) {
      $q = _$q_;
      $http = _$http_;
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      // Implement mock query of the mock service here.
      mockPhoneService.queryByPromise = function() {
        var deferred = $q.defer();
        $http.get('phones/phones.json')
          .then(function(response) {
            deferred.resolve(response.data);
          });
        return deferred.promise;
      };

      ctrl = $componentController('phoneList');
    }));

    it('should create a `phones` property with 2 phones fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phones).toEqual([]);
    
      $httpBackend.flush();
      expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

    // Minimal test to verify if the test runner is working.
    it('should subtract', function() {
      var a = 3, b = 7;
      var sub = a - b;
      expect(sub).toEqual(-4);
    });
  });

});
