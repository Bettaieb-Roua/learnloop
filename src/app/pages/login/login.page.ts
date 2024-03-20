import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  
  submitForm(formValues: any) {
    console.log('Form Data: ', formValues);
    // Ici, vous pouvez traiter les données du formulaire, comme les envoyer à un serveur
  }
}
