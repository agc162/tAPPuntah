import { CommentComponent } from './comment/comment.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
})

export class ComponentsModule { }