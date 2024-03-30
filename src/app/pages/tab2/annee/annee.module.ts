import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnneePageRoutingModule } from './annee-routing.module';

import { AnneePage } from './annee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnneePageRoutingModule
  ],
  declarations: [AnneePage]
})
export class AnneePageModule {}
