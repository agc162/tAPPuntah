import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/Home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./Pages/Home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./Pages/Pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
