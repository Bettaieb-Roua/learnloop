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
  
 
    email:string= '';
    password:string='';
    emailFormatError: string = '';
    passwordError: string = '';
    emailError: string = '';

  
  selectedRole: string = 'client';

  validateEmailFormat(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  constructor(private router:Router, private sharedDataService: SharedDataService,private authService: AuthService) { }


  ngOnInit() {
  }
 
  
 async submitForm(form: any) {
  this.clearErrors(); 
  if (this.email.trim() === '') {
    form.controls['email'].markAsTouched();
  }
  else if (!this.validateEmailFormat(this.email)) {
    this.emailFormatError = 'Format d\'email invalide';
  }
  if (this.password.trim() === '') {
    form.controls['password'].markAsTouched();
  }
  if (form.valid  ) {
    const loginData = {
      'email':this.email,
      'password':this.password 
    };
  
    this.authService.login(loginData.email, loginData.password)
    .subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/tab/tabs/tab2']);
      } else {
        // Gérer l'authentification échouée ici (afficher un message d'erreur, etc.)
      }
    });
    this.sharedDataService.selectedTab$.subscribe(tab => {
      this.router.navigate(['/tab/tabs/' + tab]); 
    }); 
  }

  }
  clearErrors() {
    this.passwordError = '';
    this.emailError = '';
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
 
 
    
  }
  loginSeller(){
   
    this.router.navigate(['/tab']);
  }
  loginAdmin(){
    this.sharedDataService.updateSelectedRole('Admin');
  
  }
}
