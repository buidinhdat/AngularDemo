import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private element:ElementRef, private render:Renderer2) {
    render.setStyle(element.nativeElement,'color','red');
  }

}
