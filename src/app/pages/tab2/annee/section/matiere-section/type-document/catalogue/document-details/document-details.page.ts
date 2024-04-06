import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.page.html',
  styleUrls: ['./document-details.page.scss'],
})
export class DocumentDetailsPage implements OnInit {
  books = [
    { id:'1',title: 'Livre 1 ',prix:'1.200',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre1.jpg', route: 'primaire' },
    {id:'2', title: 'Livre 2',prix:'1.300',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre2.jpg', route: 'college' },
    {id:'3', title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
  ];
  constructor(private route:ActivatedRoute) { }
  niveau: string | null = null; 
  annee: string | null = null;
  section: string | null = null;
  matiere: string | null = null;
  typeDocument: string | null = null;
  id:string|null = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.niveau = params.get('niveau');
      this.annee = params.get('annee');
      this.section = params.get('section');
      this.matiere = params.get('matiere');
      this.typeDocument=params.get('typeDocument');     
      this.id = params.get('id');  
    });

  }

}
