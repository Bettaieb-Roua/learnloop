import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionPage } from './section.page';

const routes: Routes = [
  {
    path: '',
    component: SectionPage
  },
  {
    path: 'matiere-section/:section',
    loadChildren: () => import('./matiere-section/matiere-section.module').then( m => m.MatiereSectionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionPageRoutingModule {}
