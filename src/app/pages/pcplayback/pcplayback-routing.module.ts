import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcplaybackPage } from './pcplayback.page';

const routes: Routes = [
  {
    path: '',
    component: PcplaybackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcplaybackPageRoutingModule {}
