import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';
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


  constructor(private router:Router, private sharedDataService: SharedDataService) { }

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
    
    this.sharedDataService.updateSelectedRole('Client');
  }
  loginSeller(){
    this.sharedDataService.updateSelectedRole('Seller');
    this.router.navigate(['/tab']);
  }
  loginAdmin(){
    this.sharedDataService.updateSelectedRole('Admin');
  
  }
}
