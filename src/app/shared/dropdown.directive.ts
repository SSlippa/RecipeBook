import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {

  @HostBinding('class.open') clicked = false;

  @HostListener('click') toggleMenu() {
    this.clicked = !this.clicked;
  }



  // @HostListener('click') toggleMenu(eventData: Event) {
  //   this.clicked = !this.clicked;
  //   if (!this.clicked) {
  //   this.renderer.addClass(this.elRef.nativeElement, 'open');
  //   } else {
  //     this.renderer.removeClass(this.elRef.nativeElement, 'open');
  //   }
  // }

  // @HostListener('mouseenter') mouseover(eventData: Event) {
  //   this.renderer.addClass(this.elRef.nativeElement, 'open');
  // }
  //
  // @HostListener('mouseleave') mouseleave(eventData: Event) {
  //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
  // }


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
}
