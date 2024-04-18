import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertController , AlertInput} from '@ionic/angular';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/service/shared-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  isAuthenticated = false;
  books = [
    { title: 'Livre 1',prix:'1.200',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre1.jpg', route: 'primaire' },
    { title: 'Livre 2',prix:'1.300',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre2.jpg', route: 'college' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
    { title: 'Livre 3',prix:'1.500',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre3.jpg', route: 'secondaire' },
  ];
  constructor(private authService: AuthService,
    private alertController: AlertController,
    private router:Router,
    private sharedDataService:SharedDataService,



  ) { }
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });}
  viewDetails(){
    
  }
  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Veuillez vous connecter à votre compte pour continuer',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log(this.isAuthenticated);
            this.router.navigateByUrl('/tab/tabs/tab1');
            
          }
        },
        {
          text: 'Se connecter',
          role: 'confirm',
          handler: () => {
            console.log(this.isAuthenticated);

            this.router.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }

}
