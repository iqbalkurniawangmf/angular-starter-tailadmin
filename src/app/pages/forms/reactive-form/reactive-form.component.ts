import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { CollapsibleCardComponent } from '../../../shared/components/ui/collapsible-card/collapsible-card.component';
import { StepperComponent } from '../../../shared/components/ui/stepper/stepper.component';

@Component({
  selector: 'app-reactive-form',
  imports: [PageBreadcrumbComponent, CollapsibleCardComponent, StepperComponent],
  templateUrl: './reactive-form.component.html',
  styles: ``,
})
export class ReactiveFormComponent {
  currentStep = 1;

  private stepLabels = [
    'Basic Info',
    'Detail Project',
    'Review',
    'Submit',
    'Approval',
    'Payment',
    'Confirmation',
    'Processing',
    'Final Check',
    'Completed',
  ];

  get steps() {
    return this.stepLabels.map((label, index) => ({
      label,
      status: this.getStatus(index),
    }));
  }

  getStatus(index: number): 'completed' | 'active' | 'upcoming' {
    if (index < this.currentStep) return 'completed';
    if (index === this.currentStep) return 'active';
    return 'upcoming';
  }

  onStepClick(index: number) {
    this.currentStep = index;
  }
}
