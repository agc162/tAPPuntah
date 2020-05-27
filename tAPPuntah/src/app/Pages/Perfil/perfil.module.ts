import { HomePage } from './../Home/home.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from './../../Components/components.module';
import { EventComponent } from './../../Components/event/event.component';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    ComponentsModule,
    // EventComponent
  ],
  declarations: [
    PerfilPage,
    // EventComponent
  ]
})
export class PerfilPageModule {}
