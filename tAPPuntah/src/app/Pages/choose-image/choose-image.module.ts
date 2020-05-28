import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseImagePageRoutingModule } from './choose-image-routing.module';

import { ChooseImagePage } from './choose-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseImagePageRoutingModule
  ],
  declarations: [ChooseImagePage]
})
export class ChooseImagePageModule {}
