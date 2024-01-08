import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './core/phone/phone.service';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule
  ],
  providers: [
    Phone,
  ]
})
export class AppModule implements DoBootstrap {
  constructor(@Inject(UpgradeModule) private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}