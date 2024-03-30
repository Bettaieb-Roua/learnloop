import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeDocumentPage } from './type-document.page';

const routes: Routes = [
  {
    path: '',
    component: TypeDocumentPage
  },
  {
    path: 'catalogue/:typeDocument',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeDocumentPageRoutingModule {}
