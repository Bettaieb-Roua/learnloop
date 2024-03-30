import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-annee',
  templateUrl: './annee.page.html',
  styleUrls: ['./annee.page.scss'],
})
export class AnneePage implements OnInit {
  anneesPrimaire = [
    { title: 'première année', route: '1' },
    { title: 'deuxième année', route: '2' },
    { title: 'troisième année', route: '3' },
    { title: 'quatrième année', route: '4' },
    { title: 'cinquième année', route: '5' },
    { title: 'sizième année', route: '6' }
  ];
  anneesCollege = [
    { title: '7ème année', route: '7' },
    { title: '8ème année', route: '8' },
    { title: '9ème année', route: '9' }
  ];
  
  anneesSecondaire = [
    { title: '1ère année', route: '1' },
    { title: '2ème année', route: '2' },
    { title: '3ème année', route: '3' },
    { title: 'Baccalauréat', route: 'bac' }
  ];
  
  anneesSuperieur = [
    { title: 'première année', route: '1' },
    { title: 'deuxième année', route: '2' },
    { title: 'troisième année', route: '3' },
    { title: 'quatrième année', route: '4' },
    { title: 'cinquième année', route: '5' }
  ];
  


  
anneesSecondaireSansPremier: { title: string; route: string; }[] | undefined;
niveauSelectionne: string | null = null;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.niveauSelectionne = params.get('id');
      this.anneesSecondaireSansPremier = this.anneesSecondaire.slice(1);
    });
  }
  goToSection(route:string){
    this.router.navigateByUrl(`/tab/tabs/tab2/annee/${this.niveauSelectionne}/section/${route}`)

  }

}
