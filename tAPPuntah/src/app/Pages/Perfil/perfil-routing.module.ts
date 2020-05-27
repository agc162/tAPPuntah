import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  }
  // ,
  // {
  //   path: 'evento/:idEvento',
  //   loadChildren: () => import('../Evento/evento-module').then( m => m.EventoPageModule)
  // },
  // {
  //   path: 'evento/:idEvento/comments',
  //   loadChildren: () => import('../Comments/comments.module').then( m => m.CommentsPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
