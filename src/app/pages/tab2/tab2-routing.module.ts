import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';


const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },  
  {
      path:'annee/:niveau',
      loadChildren: () => import('./annee/annee.module').then( m => m.AnneePageModule)
  },

    
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
