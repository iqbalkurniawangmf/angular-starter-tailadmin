import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export type StepStatus = 'completed' | 'active' | 'upcoming';

export interface StepItem {
  label: string;
  status: StepStatus;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  imports: [CommonModule],
})
export class StepperComponent {
  @Input({ required: true }) steps: StepItem[] = [];
  @Input() clickable: boolean = false;

  @Output() stepClick = new EventEmitter<number>();

  onStepClick(index: number) {
    if (this.clickable) {
      this.stepClick.emit(index);
    }
  }
}
