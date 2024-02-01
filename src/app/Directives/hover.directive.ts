import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseover') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '50px 40px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '2s');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.renderer.setStyle(this.element.nativeElement, 'margin', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 30px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '3s');
  }
}
