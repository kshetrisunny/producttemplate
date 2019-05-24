import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[sidebar]'
})

export class Siderbar {
    @HostBinding('class.active')isopen = false;
    @HostListener('click') toggleOpen($event) {
        this.isopen = !this.isopen;
    }
}
