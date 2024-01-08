import { __decorate, __metadata, __param } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './core/phone/phone.service';
import { routeParamsProvider } from './ajs-upgraded-providers';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CheckmarkPipe } from './core/checkmark/checkmark.pipe';
let AppModule = class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    }
};
AppModule = __decorate([
    NgModule({
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
    }),
    __param(0, Inject(UpgradeModule)),
    __metadata("design:paramtypes", [UpgradeModule])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map