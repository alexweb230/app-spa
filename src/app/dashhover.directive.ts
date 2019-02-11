import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appDashhover]'
})
export class DashhoverDirective {

    constructor(private el: ElementRef) {
    }

    @HostBinding('class.hovered') isHovered = false;

    @HostListener('mouseenter')onMouseEnter() {
        this.isHovered = true;


    }

    @HostListener('mouseleave')onMouseLeave() {
        this.isHovered = false;
    }

}
