import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormElementsComponent } from './form-elements.component';

const routes: Routes = [
  {
    path: 'form-elements',
    component: FormElementsComponent,
    title: 'Angular Form Element | Starter Enterprise Angular',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormElementsRoutingModule {}
