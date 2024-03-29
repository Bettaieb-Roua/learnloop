import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class signupPage implements OnInit {
  signupData = {
 
    email: '',
    password:''
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  submitForm(formValues: any) {
    console.log('Form Data: ', formValues);
  }


  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  signupWithFacebook(){
  
  }
  signupWithGoogle(){

  }
}
