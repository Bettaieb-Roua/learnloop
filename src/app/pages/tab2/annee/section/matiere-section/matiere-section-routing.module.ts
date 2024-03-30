import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatiereSectionPage } from './matiere-section.page';

const routes: Routes = [
  {
    path: '',
    component: MatiereSectionPage
  },
  {
    path: 'type-document/:matiere',
    loadChildren: () => import('./type-document/type-document.module').then( m => m.TypeDocumentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatiereSectionPageRoutingModule {}
