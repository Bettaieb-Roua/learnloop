import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-document',
  templateUrl: './type-document.page.html',
  styleUrls: ['./type-document.page.scss'],
})
export class TypeDocumentPage implements OnInit {
  typesDocuments=[
    { title: 'Manuels Scolaires', route: '1' },
    { title: 'Résumé de cours', route: '3' },
    { title: 'Fiches de Révision', route: '3' },
    { title: 'Séries d\'exercices ', route: '2' },
    { title: 'Parascolaires', route: '3' },
    { title: 'Examens', route: '3' },


  ]
  constructor() { }

  ngOnInit() {
  }
  goToType(){

  }

}
