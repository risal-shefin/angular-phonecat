import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

declare const angular: angular.IAngularStatic;
import { downgradeInjectable } from "@angular/upgrade/static";

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
  age: number;
}

@Injectable()
export class Phone {
  constructor(private http: HttpClient) {}
  query(): Observable<PhoneData[]> {
    return this.http.get<PhoneData[]>(`phones/phones.json`);
  }
  get(id: string): Observable<PhoneData> {
    return this.http.get<PhoneData>(`phones/${id}.json`);
  }

  queryByPromise(): Promise<PhoneData[] | undefined> {
    return this.query().toPromise();
  }

  getByPromise(id: string): Promise<PhoneData | undefined> {
    return this.get(id).toPromise();
  }
}

angular.module('core.phone')
  .factory('phone', downgradeInjectable(Phone));
