import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onclick(eventData: Event) { 
    // this.isOpen = !this.isOpen;
    // this.renderer.addClass(this.elRef.nativeElement, 'open');
  }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; 
  }
}
