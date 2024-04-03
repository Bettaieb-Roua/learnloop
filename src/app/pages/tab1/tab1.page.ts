import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  books = [
    { title: 'Livre 1 ',prix:'1.200',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre1.jpg', route: 'primaire' },
    { title: 'Livre 2',prix:'1.300',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre2.jpg', route: 'college' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
  ];
  constructor() {}
  viewDetails(){
    
  }

}
