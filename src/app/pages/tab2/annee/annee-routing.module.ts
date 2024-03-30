import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnneePage } from './annee.page';

const routes: Routes = [
  {
    path: '',
    component: AnneePage
  },
  {
    path: 'section/:annee',
    loadChildren: () => import('./section/section.module').then( m => m.SectionPageModule)
  },
  {
    path: 'matiere/:annee',
    loadChildren: () => import('./matiere/matiere.module').then( m => m.MatierePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnneePageRoutingModule {}
