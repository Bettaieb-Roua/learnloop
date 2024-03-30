import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeDocumentPageRoutingModule } from './type-document-routing.module';

import { TypeDocumentPage } from './type-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeDocumentPageRoutingModule
  ],
  declarations: [TypeDocumentPage]
})
export class TypeDocumentPageModule {}
