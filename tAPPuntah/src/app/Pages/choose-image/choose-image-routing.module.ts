import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseImagePage } from './choose-image.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseImagePageRoutingModule {}
