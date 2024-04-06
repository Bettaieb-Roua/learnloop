import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-type-document',
  templateUrl: './type-document.page.html',
  styleUrls: ['./type-document.page.scss'],
})
export class TypeDocumentPage implements OnInit {
  typesDocuments=[
    { title: 'Manuels Scolaires', route: 'Manuels Scolaires' },
    { title: 'Résumé de cours', route: 'Résumé de cours' },
    { title: 'Fiches de Révision', route: 'Fiches de Révision' },
    { title: 'Séries d\'exercices ', route: 'Séries d\'exercices' },
    { title: 'Parascolaires', route: 'Parascolaires' },
    { title: 'Examens', route: 'Examens' },
  ]
  constructor(private router:Router, private route:ActivatedRoute) { }
  niveau: string | null = null; 
  annee: string | null = null;
  section: string | null = null;
  matiere: string | null = null;
  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.niveau = params.get('niveau');
      this.annee = params.get('annee');
      this.section = params.get('section');
      this.matiere = params.get('matiere');
      
      
      
    });
    
  }
  goToCatalog(route: string){
    this.router.navigateByUrl(`/tab/tabs/tab2/annee/${this.niveau}/section/${this.annee}/matiere-section/${ this.section}/type-document/${this.matiere}/catalogue/${route}`)
  }

}
