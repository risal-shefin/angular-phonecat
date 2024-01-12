import { DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './services/phone.service';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { PhoneDetailComponent } from './components/phone-detail/phone-detail.component';
import { FormsModule } from '@angular/forms';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpClientModule,
    FormsModule
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