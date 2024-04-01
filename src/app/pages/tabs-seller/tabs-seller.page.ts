import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabs-seller',
  templateUrl: './tabs-seller.page.html',
  styleUrls: ['./tabs-seller.page.scss'],
})
export class TabsSellerPage {

  constructor(private router: Router) { }

 
  logout(){
    this.router.navigateByUrl('/login')
  }
  goToProfile(){
this.router.navigateByUrl('/profile')
  }

}
