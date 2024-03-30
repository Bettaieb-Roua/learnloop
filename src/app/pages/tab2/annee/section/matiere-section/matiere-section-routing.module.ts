import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatiereSectionPage } from './matiere-section.page';

const routes: Routes = [
  {
    path: '',
    component: MatiereSectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatiereSectionPageRoutingModule {}
