import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagFinalPage } from './pag-final.page';

const routes: Routes = [
  {
    path: '',
    component: PagFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagFinalPageRoutingModule {}
