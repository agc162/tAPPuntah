import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'evento/:idEvento',
    loadChildren: () => import('../Evento/evento-module').then( m => m.EventoPageModule)
  },
  {
    path: 'evento/:idEvento/comments',
    loadChildren: () => import('../Comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'evento/:idEvento/editEvent',
    loadChildren: () => import('../edit-event/edit-event.module').then( m => m.EditEventPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
