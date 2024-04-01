import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
user=[{name:'Roua Bettaieb', email:'rouabettaieb@gmail.com'}]
  constructor(private router:Router) { }

  ngOnInit() {
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
