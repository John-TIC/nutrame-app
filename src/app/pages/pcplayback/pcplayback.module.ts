import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcplaybackPageRoutingModule } from './pcplayback-routing.module';

import { PcplaybackPage } from './pcplayback.page';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcplaybackPageRoutingModule,
    YouTubePlayerModule
  ],
  declarations: [PcplaybackPage]
})
export class PcplaybackPageModule {}
