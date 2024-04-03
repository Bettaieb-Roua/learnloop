import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
user=[{name:'Roua Bettaieb', email:'rouabettaieb@gmail.com'}]
isAuthenticated = false;
  constructor(private router:Router,private authService: AuthService) { }

  ngOnInit() : void {
    this.authService.isLoggedIn().subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });

  }
  goToOrdersPage() {
   
  }

  goToLikedArticlesPage() {
this.router.navigateByUrl('/tab/tabs/favorites')
  }

  goToSettingsPage() {
    this.router.navigateByUrl('/profile/profile-settings')   
 
  }

}
