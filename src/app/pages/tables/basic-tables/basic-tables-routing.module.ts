import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTablesComponent } from './basic-tables.component';

const routes: Routes = [
  {
    path: 'basic-tables',
    component: BasicTablesComponent,
    title: 'Angular Basic Table | Starter Enterprise Angular',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicTablesRoutingModule {}
