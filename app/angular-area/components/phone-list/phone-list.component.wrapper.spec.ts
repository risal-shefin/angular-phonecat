// Currently, using the directives that extend UpgradeComponent, we can only test component creation.

import {Component} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {Phone, PhoneData} from '../../services/phone.service';

import { PhoneListComponentWrapper } from './phone-list.component.wrapper';
import {UpgradeModule } from '@angular/upgrade/static';

class MockPhone {
  queryByPromise(): Promise<PhoneData[] | undefined> {
    let mockList = [
        {name: 'Nexus S', snippet: '', images: [], age: 1}, 
        {name: 'Motorola DROID', snippet: '', images: [], age: 2}
    ];

    return new Promise((resolve) => {
        resolve(mockList);    
    })
  }
}

@Component({
  template: `<phone-list></phone-list>`
})
class MockPhoneListComponent { }

let fixture: ComponentFixture<MockPhoneListComponent>;

describe('PhoneList', () => {

  beforeEach(waitForAsync(() => {
    TestBed
      .configureTestingModule({
          declarations: [
            PhoneListComponentWrapper,
            MockPhoneListComponent
          ],
          providers: [
            {provide: Phone, useClass: MockPhone},
            {provide: '$scope', useExisting: '$rootScope'}
          ],
          imports: [
            UpgradeModule
          ]
        })
        .compileComponents();

        // Bootstrap Angular JS
        TestBed.inject(UpgradeModule).bootstrap(document.documentElement, ['phonecatApp']);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockPhoneListComponent);
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create a component', () => {
    expect(fixture).toBeTruthy();
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});