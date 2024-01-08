import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './core/phone/phone.service';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  declarations: [
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  providers: [
    Phone,
    routeParamsProvider
  ]
})
export class AppModule implements DoBootstrap {
  constructor(@Inject(UpgradeModule) private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}