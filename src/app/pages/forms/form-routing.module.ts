import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'form-elements',
    component: FormElementsComponent,
    title: 'Angular Form Element | Starter Enterprise Angular'
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
    title: 'Reactive Form | Starter Enterprise Angular'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
