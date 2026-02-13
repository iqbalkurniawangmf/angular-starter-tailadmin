import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalenderComponent,
    title: 'Angular Calender | Starter Enterprise Angular',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalenderRoutingModule {}
