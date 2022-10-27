import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagFinalPageRoutingModule } from './pag-final-routing.module';

import { PagFinalPage } from './pag-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagFinalPageRoutingModule
  ],
  declarations: [PagFinalPage]
})
export class PagFinalPageModule {}
