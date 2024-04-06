import { Component, OnInit , ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataService } from 'src/app/services/service/shared-data.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { product } from 'src/models/interface-product';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  @ViewChild(IonModal) modal: IonModal | any;
  books:product[];
  document: product;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string='';

  
 
  selectedRole: string = '';
  constructor(private router:Router, private route:ActivatedRoute, private sharedDataService:SharedDataService) { 
    this.modal = undefined;
    this.document={} as product;
    this.books = [
      {date_post:new Date(),reservationmax_duration:'1',state: 'Neuf',category_id:5,owner_id:34,price:1.200,product_id:3,descrption:'blablablablablabla', product_picture: 'assets/images/livres/livre1.jpg' },
      {date_post:new Date(),reservationmax_duration:'2',state: 'Neuf',category_id:5,owner_id:34,price:1.300,product_id:3,descrption:'blablablablablabla', product_picture: 'assets/images/livres/livre2.jpg'},
      {date_post:new Date(),reservationmax_duration:'3',state: 'Neuf',category_id:5,owner_id:34,price:1.500,product_id:3,descrption:'blablablablablabla', product_picture: 'assets/images/livres/livre3.jpg'},
      {date_post:new Date(),reservationmax_duration:'4',state: 'Neuf',category_id:5,owner_id:34,price:1.500,product_id:3,descrption:'blablablablablabla', product_picture: 'assets/images/livres/livre3.jpg'},
      {date_post:new Date(),reservationmax_duration:'5',state: 'Neuf',category_id:5,owner_id:34,price:1.500,product_id:3,descrption:'blablablablablabla', product_picture: 'assets/images/livres/livre3.jpg'},
      {date_post:new Date(),reservationmax_duration:'6',state: 'Neuf',category_id:5,owner_id:34,price:1.500,product_id:3,descrption:'blablablablablabla', product_picture: 'assets/images/livres/livre3.jpg'},
      {date_post:new Date(),reservationmax_duration:'7',state: 'Neuf',category_id:5,owner_id:34,price:1.500,product_id:3,descrption:'blablablablablabla', product_picture: 'assets/images/livres/livre3.jpg'},
   
  
    ];
  }
 
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
 
  showDetails(id:number){
    this.router.navigateByUrl(`/tab/tabs/tab2/annee/${this.niveau}/section/${this.annee}/matiere-section/${ this.section}/type-document/${this.matiere}/catalogue/${this.typeDocument}/document-details/${id}`)


  }
  likeBook(book: string) {
    // Mettre à jour le statut "like" du livre
    // ...
  
    // Afficher un message de confirmation
    alert("Le livre a été ajouté à vos favoris");
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    console.log('article créé',this.document)
  }


  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
