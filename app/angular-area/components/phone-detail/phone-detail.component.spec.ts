import { TestBed, fakeAsync, waitForAsync } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { PhoneDetailComponent } from './phone-detail.component';
import { Phone, PhoneData } from '../../services/phone.service';
import { CheckmarkPipe } from '../../core/checkmark/checkmark.pipe';
import { RouteParams } from 'app/angular-area/ajs-upgraded-providers';

function xyzPhoneData(): PhoneData {
  return {name: 'phone xyz', snippet: '', images: ['image/url1.png', 'image/url2.png'], age: 1};
}

class MockPhone {
  get(id: string): Observable<PhoneData> {
    return of(xyzPhoneData());
  }
}

class RouteParamsMock {
  constructor(public snapshot: any) {}
}

describe('PhoneDetailComponent', () => {

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckmarkPipe, PhoneDetailComponent ],
      providers: [
        { provide: Phone, useClass: MockPhone },
        { provide: RouteParams, useValue: new RouteParamsMock({ params: { phoneId: 1 } }) }
      ]
    })
    .compileComponents();
  }));

  it('should fetch phone detail', () => {
    const fixture = TestBed.createComponent(PhoneDetailComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(xyzPhoneData().name);
  });
});