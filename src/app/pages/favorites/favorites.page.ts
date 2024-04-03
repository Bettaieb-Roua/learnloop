import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  books = [
    { title: 'Livre 1 ',prix:'1.200',etat:'Neuf',description:'blablablablablabla', image: 'assets/images/livres/livre1.jpg', route: 'primaire' },
  ];
  isAuthenticated = false;

  constructor(private authService: AuthService) { }
  viewDetails(){
    
  }
  ngOnInit() : void {
    this.authService.isLoggedIn().subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });

  }

}
