import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank.component';

const routes: Routes = [
  {
    path: 'blank',
    component: BlankComponent,
    title: 'Angular Blank | Starter Enterprise Angular',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlankRoutingModule {}
