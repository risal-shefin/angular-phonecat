import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Inject } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ],
})
export class AppModule implements DoBootstrap {
  constructor(@Inject(UpgradeModule) private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}