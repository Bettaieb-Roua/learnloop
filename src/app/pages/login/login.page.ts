import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router:Router) { }

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
  login(){
    this.router.navigate(['/tab']);
  }
}
