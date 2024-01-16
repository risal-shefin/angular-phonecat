import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Phone, PhoneData } from './phone.service';

describe('Phone', () => {
  let phone: Phone;
  const phonesData: PhoneData[] = [
    {name: 'Phone X', snippet: '', images: [], age: 1},
    {name: 'Phone Y', snippet: '', images: [], age: 2},
    {name: 'Phone Z', snippet: '', images: [], age: 3}
  ];
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        Phone,
      ]
    });
  });

  beforeEach(inject([HttpTestingController, Phone], (_httpMock_: HttpTestingController, _phone_: Phone) => {
    httpMock = _httpMock_;
    phone = _phone_;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch the phones data from `phones/phones.json`', () => {
    phone.query().subscribe(result => {
      expect(result).toEqual(phonesData);
    });
    const req = httpMock.expectOne(`phones/phones.json`);
    req.flush(phonesData);
  });
});