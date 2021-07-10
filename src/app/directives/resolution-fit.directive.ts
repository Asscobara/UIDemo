import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResolutionFit]'
})
export class ResolutionFitDirective {

  constructor(private el: ElementRef) {
  
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.el.nativeElement.style.width = `${this.el.nativeElement.clientWidth / 1920 * event.srcElement.window.outerWidth}px`;
    this.el.nativeElement.style.height = `${this.el.nativeElement.clientHeight / 1080 * event.srcElement.window.outerHeight}px`;      
  }

}
