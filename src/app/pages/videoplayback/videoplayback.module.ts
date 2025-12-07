import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoplaybackPageRoutingModule } from './videoplayback-routing.module';

import { VideoplaybackPage } from './videoplayback.page';

import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoplaybackPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [VideoplaybackPage]
})
export class VideoplaybackPageModule {}
