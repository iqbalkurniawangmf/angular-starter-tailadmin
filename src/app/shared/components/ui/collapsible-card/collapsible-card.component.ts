import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  imports: [
    CommonModule
  ]
})
export class CollapsibleCardComponent {

  @Input() title: string = 'Card Title';
  @Input() defaultOpen: boolean = true;

  isOpen = true;

  ngOnInit() {
    this.isOpen = this.defaultOpen;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
