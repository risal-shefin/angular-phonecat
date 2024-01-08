import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let CheckmarkPipe = class CheckmarkPipe {
    transform(input) {
        return input ? '\u2713' : '\u2718';
    }
};
CheckmarkPipe = __decorate([
    Pipe({ name: 'checkmark' })
], CheckmarkPipe);
export { CheckmarkPipe };
//# sourceMappingURL=checkmark.pipe.js.map