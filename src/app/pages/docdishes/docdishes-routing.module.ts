import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocdishesPage } from './docdishes.page';

const routes: Routes = [
  {
    path: '',
    component: DocdishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocdishesPageRoutingModule {}
