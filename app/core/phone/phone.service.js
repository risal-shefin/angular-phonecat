import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { downgradeInjectable } from '@angular/upgrade/static';
let Phone = class Phone {
    constructor(http) {
        this.http = http;
    }
    query() {
        return this.http.get(`phones/phones.json`);
    }
    get(id) {
        return this.http.get(`phones/${id}.json`);
    }
};
Phone = __decorate([
    Injectable(),
    __param(0, Inject(HttpClient)),
    __metadata("design:paramtypes", [HttpClient])
], Phone);
export { Phone };
angular.module('core.phone')
    .factory('phone', downgradeInjectable(Phone));
/*
angular.
  module('core.phone').
  factory('phone', ['$resource',
    ($resource: angular.resource.IResourceService) =>
      $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      })
  ]);
  */
//# sourceMappingURL=phone.service.js.map