import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  educationLevels = [
    { title: 'Primaire', image: 'assets/images/primaire.jpg', route: 'primaire' },
    { title: 'Collège', image: 'assets/images/collège.jpg', route: 'college' },
    { title: 'Secondaire', image: 'assets/images/lycée.jpg', route: 'secondaire' },
    { title: 'Supérieur', image: 'assets/images/supérieur.jpg', route: 'superieur' }
  ];

  constructor(private route:Router) {}
  goToEducationLevel(route: string) {
    this.route.navigateByUrl(`/tab/tabs/tab2/annee/${route}`);
  }
}
