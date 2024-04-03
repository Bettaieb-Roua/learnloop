import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/service/shared-data.service';
import { AlertController , AlertInput} from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  selectedRole: string = '';
  selectedTab: string = '';


  isAuthenticated = false;

  constructor(
    private router:Router,
     private sharedDataService:SharedDataService,
     private alertController: AlertController,
     private authService: AuthService,
      ) {
  }
  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });

  } 
  async showAlert(tab:string) {
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
            this.sharedDataService.updateSelectedTab(tab);

            this.router.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/tab/tabs/tab1')
  }
  goToProfile(){
this.router.navigateByUrl('/profile')
  }

}
