import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',    redirectTo: 'loader',    pathMatch: 'full' },
  { path: 'loader',    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule) },
  { path: 'carousel',  loadChildren: () => import('./pages/carousel/carousel.module').then( m => m.CarouselPageModule) },
  { path: 'docdishes', loadChildren: () => import('./pages/docdishes/docdishes.module').then( m => m.DocdishesPageModule) },
  { path: 'videos',    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule) },
  { path: 'videoplayback', loadChildren: () => import('./pages/videoplayback/videoplayback.module').then( m => m.VideoplaybackPageModule) },
  { path: 'podcast',   loadChildren: () => import('./pages/podcast/podcast.module').then( m => m.PodcastPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
