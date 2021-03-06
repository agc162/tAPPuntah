import { RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})

export class ComponentsModule { }