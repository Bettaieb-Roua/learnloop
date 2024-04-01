import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  books = [
    { title: 'Livre 1 ',prix:'1.200',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre1.jpg', route: 'primaire' },
    { title: 'Livre 2',prix:'1.300',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre2.jpg', route: 'college' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
  ];
  selectedRole: string = '';
  constructor(private router:Router, private route:ActivatedRoute, private sharedDataService:SharedDataService) { }
  niveau: string | null = null; 
  annee: string | null = null;
  section: string | null = null;
  matiere: string | null = null;
  typeDocument: string | null = null;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.niveau = params.get('niveau');
      this.annee = params.get('annee');
      this.section = params.get('section');
      this.matiere = params.get('matiere');
      this.typeDocument=params.get('typeDocument');       
    });
    this.sharedDataService.selectedRole$.subscribe(role => {
      this.selectedRole = role;
    });
  }
  goToSeller(){

  }
  likeBook(book: string) {
    // Mettre à jour le statut "like" du livre
    // ...
  
    // Afficher un message de confirmation
    alert("Le livre a été ajouté à vos favoris");
  }

}
