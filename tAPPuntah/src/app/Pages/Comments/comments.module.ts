import { CommentComponent } from './../../Components/comment/comment.component';
import { ComponentsModule } from './../../Components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentsPageRoutingModule } from './comments-routing.module';

import { CommentsPage } from './comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CommentsPage, CommentComponent]
})
export class CommentsPageModule {}
