import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[tableSizeDirective]',
  standalone: true,
})
export class TableSizeListenerDirective {
  readonly cellElement: ElementRef | null = null;
}
