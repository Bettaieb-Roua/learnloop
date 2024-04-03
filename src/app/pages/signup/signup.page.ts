import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class signupPage implements OnInit {
  selectedGovernorate: string = '';
  selectedDelegation: string = '';
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
  signupData = {
 
    email: '',
    password:''
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onGovernorateChange() {
    // Réinitialiser la sélection de la délégation lorsque le gouvernorat change
    this.selectedDelegation = '';
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
