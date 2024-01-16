import {SpyLocation} from '@angular/common/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';

import {Phone, PhoneData} from '../../services/phone.service';

import { PhoneListComponentWrapper } from './phone-list.component.wrapper';

class ActivatedRouteMock {
  constructor(public snapshot: any) {}
}

class MockPhone {
  query(): Observable<PhoneData[]> {
    return of([
      {name: 'Nexus S', snippet: '', images: [], age: 1}, 
      {name: 'Motorola DROID', snippet: '', images: [], age: 2}
    ]);
  }
}

let fixture: ComponentFixture<PhoneListComponentWrapper>;

describe('PhoneList', () => {
  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          declarations: [PhoneListComponentWrapper],
          providers: [
            {provide: Phone, useClass: MockPhone}
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListComponentWrapper);
  });

  it('should create "phones" model with 2 phones fetched from xhr', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.phone-list-item').length).toBe(2);
    expect(compiled.querySelector('.phone-list-item:nth-child(1)').textContent)
        .toContain('Motorola DROID');
    expect(compiled.querySelector('.phone-list-item:nth-child(2)').textContent)
        .toContain('Nexus S');
  });

  xit('should set the default value of orderProp model', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('select option:last-child').selected).toBe(true);
  });
});