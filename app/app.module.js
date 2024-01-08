import { __decorate, __metadata, __param } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Phone } from './core/phone/phone.service';
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
        providers: [
            Phone,
        ]
    }),
    __param(0, Inject(UpgradeModule)),
    __metadata("design:paramtypes", [UpgradeModule])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map