import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosPageRoutingModule } from './videos-routing.module';

import { VideosPage } from './videos.page';

import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [VideosPage]
})
export class VideosPageModule {}
