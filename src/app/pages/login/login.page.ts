import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/service/shared-data.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginData = {
 
    email: '',
    password:''
  };
  selectedRole: string = 'client';


  constructor(private router:Router, private sharedDataService: SharedDataService,private authService: AuthService) { }


  ngOnInit() {
  }

  
  submitForm(formValues: any) {
    console.log('Form Data: ', formValues);
  }
  navigateToForgetPassword(){
    this.router.navigate(['/forgetpassword']);
  }
  loginWithGoogle(){

  }
  loginWithFacebook(){
    
  }
  navigateToSignup(){
    this.router.navigate(['/signup']);
    

  }
  login(credentials: { email: string, password: string }){
   this.authService.login(credentials.email, credentials.password);

  // this.router.navigate(['/tab/tabs/tab2']);
  this.sharedDataService.selectedTab$.subscribe(tab => {
    this.router.navigate(['/tab/tabs/' + tab]); 
  });  
  this.authService.login(credentials.email, credentials.password)
      .subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/tab/tabs/tab2']);
        } else {
          // Gérer l'authentification échouée ici (afficher un message d'erreur, etc.)
        }
      });
    
  }
  loginSeller(){
   
    this.router.navigate(['/tab']);
  }
  loginAdmin(){
    this.sharedDataService.updateSelectedRole('Admin');
  
  }
}
