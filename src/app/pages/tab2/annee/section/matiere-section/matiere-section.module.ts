import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatiereSectionPageRoutingModule } from './matiere-section-routing.module';

import { MatiereSectionPage } from './matiere-section.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatiereSectionPageRoutingModule
  ],
  declarations: [MatiereSectionPage]
})
export class MatiereSectionPageModule {}
