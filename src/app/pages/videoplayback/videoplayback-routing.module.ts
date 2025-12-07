import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoplaybackPage } from './videoplayback.page';

const routes: Routes = [
  {
    path: '',
    component: VideoplaybackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoplaybackPageRoutingModule {}
