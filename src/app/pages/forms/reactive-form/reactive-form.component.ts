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

  get steps() {
    return [
      {
        label: 'Basic Info',
        status: this.getStatus(0),
      },
      {
        label: 'Detail Project',
        status: this.getStatus(1),
      },
      {
        label: 'Review',
        status: this.getStatus(2),
      },
      {
        label: 'Submit',
        status: this.getStatus(3),
      },
    ];
  }

  getStatus(index: number): 'completed' | 'active' | 'upcoming' {
    if (index < this.currentStep) return 'completed';
    if (index === this.currentStep) return 'active';
    return 'upcoming';
  }

  onStepClick(index: number) {
    // contoh business rule
    if (index <= this.currentStep) {
      this.currentStep = index;
    }
  }
}
