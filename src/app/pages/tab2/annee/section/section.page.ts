import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {
  sectionsDeuxieme =[
    { title: 'Sciences', route: 'Sciences' },
    { title: 'Lettres', route: 'Lettres' },
    { title: 'Informatique', route: 'Informatique' },
    { title: 'Economie & Gestion', route: 'Economie & Gestion' },
  ]
  sectionsTroisiemeBac =[
    { title: 'Maths', route: 'Maths' },
    { title: 'Sciences', route: 'Sciences' },
    { title: 'Lettres', route: 'Lettres' },
    { title: 'Informatique', route: 'Informatique' },
    { title: 'Economie & Gestion', route: 'Economie & Gestion' },
  ]
  anneeSelectionnee: string | null = null;
  niveauSelectionne: string | null = null;


  constructor(private route:ActivatedRoute, private router:Router) { }
 
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.anneeSelectionnee = params.get('annee');
      this.niveauSelectionne = params.get('niveau');

  });

}
goToMatiere(route: string) {
  this.router.navigateByUrl(`/tab/tabs/tab2/annee/${this.niveauSelectionne}/section/${this.anneeSelectionnee}/matiere-section/${route}`);
}
}