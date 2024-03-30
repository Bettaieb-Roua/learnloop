import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatierePage } from './matiere.page';

const routes: Routes = [
  {
    path: '',
    component: MatierePage
  },
  {
    path: 'type-document/:matiere',
    loadChildren: () => import('../section/matiere-section/type-document/type-document.module').then( m => m.TypeDocumentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatierePageRoutingModule {}
