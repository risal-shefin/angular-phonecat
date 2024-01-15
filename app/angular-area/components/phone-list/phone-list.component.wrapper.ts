import { Directive, ElementRef, Injector } from "@angular/core";
import { UpgradeComponent } from "@angular/upgrade/static";

// This Angular directive will act as an interface to the "upgraded" AngularJS component
@Directive({selector: 'phone-list'})
export class PhoneListComponentWrapper extends UpgradeComponent {

    // The names of the input and output properties here must match the names of the
    // `<` and `&` bindings in the AngularJS component that is being wrapped
//   @Input() hero!: Hero;
//   @Output() onRemove!: EventEmitter<void>;

    constructor(elementRef: ElementRef, injector: Injector) {
        // We must pass the name of the directive as used by AngularJS to the super
        super('phoneList', elementRef, injector);
    }
}