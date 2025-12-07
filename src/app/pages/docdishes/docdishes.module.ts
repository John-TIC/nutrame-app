import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocdishesPageRoutingModule } from './docdishes-routing.module';

import { DocdishesPage } from './docdishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocdishesPageRoutingModule
  ],
  declarations: [DocdishesPage]
})
export class DocdishesPageModule {}
