import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AlertController } from '@ionic/angular';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class signupPage implements OnInit {
  name:string='';
  email:string= '';
  password:string='';
  confirmPassword:string='';
  phoneNumber:string='';
  selectedGovernorate:string='';
  selectedDelegation:string='';
  address:string='';
  picture:string='';
  nameError: string = '';
  emailError: string = '';
  emailFormatError: string = '';

  governorates: string[] = [
    'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba', 'Kairouan',
    'Kasserine', 'Kebili', 'Le Kef', 'Mahdia', 'Manouba', 'Medenine', 'Monastir', 'Nabeul',
    'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 'Tozeur', 'Tunis', 'Zaghouan'
  ];
  
  delegationsByGovernorate: { [key: string]: string[] } = {
    'Ariana': ['Ariana Ville', 'Raoued', 'La Soukra', 'Kalaat El Andalous', 'Ettadhamen-Mnihla', 'Soukra'],
    'Beja': ['Beja Ville', 'Medjez El Bab', 'Nefza', 'Amdoun', 'Goubellat'],
    'Ben Arous': ['Ben Arous Ville', 'Megrine', 'Hammam Lif', 'Hammam Chott', 'Fouchana', 'Mornag'],
    'Bizerte': ['Bizerte Ville', 'Menzel Bourguiba', 'Mateur', 'Ras Jebel', 'Sejnane', 'Ghezala'],
    'Gabes': ['Gabes Ville', 'El Hamma', 'Mareth', 'Matmata', 'Menzel El Habib'],
    'Gafsa': ['Gafsa Ville', 'Metlaoui', 'El Ksar', 'Redeyef', 'Moulares', 'Sened'],
    'Jendouba': ['Jendouba Ville', 'Tabarka', 'Ain Draham', 'Fernana', 'Balta Bou Aouane'],
    'Kairouan': ['Kairouan Ville', 'Bouhajla', 'Hajeb El Ayoun', 'Nasrallah', 'Oueslatia'],
    'Kasserine': ['Kasserine Ville', 'Sbeitla', 'Feriana', 'Foussana', 'Hassi El Ferid'],
    'Kebili': ['Douz', 'Kebili Ville', 'Souk Lahad', 'Bechli'],
    'Le Kef': ['Le Kef Ville', 'Dahmani', 'Sakiet Sidi Youssef', 'Nebeur', 'Kalaat Senan'],
    'Mahdia': ['Mahdia Ville', 'Bou Merdes', 'El Djem', 'Chebba', 'Rejiche'],
    'Manouba': ['Manouba Ville', 'Oued Ellil', 'Djedeida', 'Douar Hicher', 'Mornaguia'],
    'Medenine': ['Medenine Ville', 'Ben Gardane', 'Zarzis', 'Djerba', 'Midoun'],
    'Monastir': ['Monastir Ville', 'Moknine', 'Ksar Hellal', 'Bekalta', 'Zeramdine'],
    'Nabeul': ['Nabeul Ville', 'Hammamet', 'Dar Chaabane', 'Kelibia', 'Menjez'],
    'Sfax': ['Sfax Ville', 'Sakiet Ezzit', 'Sakiet Eddaier', 'Thyna', 'Gremda'],
    'Sidi Bouzid': ['Sidi Bouzid Ville', 'Regueb', 'Jilma', 'Ouled Haffouz', 'Menzel Bouzaiene'],
    'Siliana': ['Siliana Ville', 'El Krib', 'Bouarada', 'Gaafour', 'Kesra'],
    'Sousse': ['Sousse Ville', 'Kantaoui', 'Msaken', 'Hammam Sousse', 'Kalaa Kebira'],
    'Tataouine': ['Tataouine Ville', 'Bir Lahmar', 'Ghomrassen', 'Dehiba', 'Remada'],
    'Tozeur': ['Tozeur Ville', 'Degache', 'Nefta', 'El Hamma du Jerid'],
    'Tunis': ['Tunis Ville', 'Ariana', 'Ben Arous', 'La Marsa', 'Le Kram', 'Sidi Bou Said'],
    'Zaghouan': ['Zaghouan Ville', 'Zriba', 'El Fahs', 'Nadhour', 'Bir Mcherga']
  };
  selectedGovernorateChanged: boolean = false;
  selectedDelegationChanged:boolean=false;

  validateEmailFormat(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  constructor(private router:Router,private authHandler: AuthService,private alertController: AlertController) {

   }
 ngOnInit() {

 }
 async onSubmit(form: any) {
  this.clearErrors(); 
  if (this.name.trim() === '') {
    form.controls['name'].markAsTouched();
  }
  if (this.email.trim() === '') {
    form.controls['email'].markAsTouched();
  }
  else if (!this.validateEmailFormat(this.email)) {
    this.emailFormatError = 'Format d\'email invalide';
  }
  if (this.password.trim() === '') {
    form.controls['password'].markAsTouched();
  }
  if (this.confirmPassword.trim() === '') {
    form.controls['confirmPassword'].markAsTouched();
  }
  if (this.phoneNumber.trim() === '') {
    form.controls['phoneNumber'].markAsTouched();
  }
  if (this.address.trim() === '') {
    form.controls['address'].markAsTouched();
  }
  
  if (form.valid  && this.validatePassword()) {
    const userData = {
      'first_name': this.name,
      'email': this.email,    
      'password': this.password,
      'phone': this.phoneNumber,
      'governorate': this.selectedGovernorate,
      'delegation': this.selectedDelegation,
      'address': this.address,
      'picture': this.picture,
    };
    this.authHandler.signup(userData).subscribe(
      (response: any) => {
        this.router.navigateByUrl('/login');
        console.log('Signup response:', response);
      },
      (error: HttpErrorResponse) => {
        if (error.status === 400 && error.error && error.error.username && error.error.username[0] === 'A user with that username already exists.') {
          // this.handleUsernameAlreadyExists();
        } else if (error.status === 400 && error.error && error.error.error === 'Email already exists') {
          this.handleEmailAlreadyExists();
        } else {
          this.handleError(error);
        }
      }
    );
  }

}
clearErrors() {
  this.nameError = '';
  this.emailError = '';
}
validatePassword(): boolean {
  return this.password === this.confirmPassword;
}
handleEmailAlreadyExists() {
  this.emailError = 'Email already exists. Please use a different email address.';
}
handleError(error: HttpErrorResponse) {
  let errorMessage = 'An error occurred during signup. Please try again later.';
  if (error.error && error.error.message) {
    errorMessage = error.error.message;
  }
  this.alertController.create({
    header: 'Signup Error',
    message: errorMessage,
    buttons: ['OK']
  }).then(alert => alert.present());
}
  onGovernorateChange() {
    if (!this.selectedGovernorateChanged && this.selectedGovernorate.trim() === '') {
      // Afficher le message d'erreur uniquement si le gouvernorat n'a pas été changé
      this.alertController.create({
        header: 'Attention!',
        message: 'Il faut choisir un gouvernorat.',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
    // Réinitialiser la sélection de la délégation lorsque le gouvernorat change
    this.selectedDelegation = '';
    // Réinitialiser le flag après chaque changement de gouvernorat
    this.selectedGovernorateChanged = false;
  }
  onDelegationChange() {
    if (!this.selectedDelegationChanged && (this.selectedGovernorate === null || this.selectedGovernorate.trim() === '')) {
      this.alertController.create({
        header: 'Attention!',
        message: 'Il faut choisir une délégation',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
    // Réinitialiser la sélection de la délégation lorsque le gouvernorat change
    this.selectedDelegation = '';
    // Réinitialiser le flag après chaque changement de gouvernorat
    this.selectedDelegationChanged = false;
  }
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength} caractères maximum . Il reste ${maxLength - inputLength} caractères`;
  }
  
  


  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  signupWithFacebook(){
  
  }
  signupWithGoogle(){

  }
}
