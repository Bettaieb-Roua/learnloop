import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matiere-section',
  templateUrl: './matiere-section.page.html',
  styleUrls: ['./matiere-section.page.scss'],
})
export class MatiereSectionPage implements OnInit {
  matieresMSc=[
    { title: 'Sciences Naturelles', route: 'sc' },
    { title: 'Mathématiques', route: 'math' },
    {title:"Physique", route :'Phy'},
    { title: 'Arabe', route: 'Ar' },
    { title: 'Philo', route: 'philo' },
    { title: 'Français', route: 'Fr' },
    { title: 'Anglais', route: 'Ang' },
    { title: 'Informatique', route: 'Inf' },
    { title: 'Option', route: 'Opt' },
  ]
  matieresLettre=[
    { title: 'Arabe', route: 'Ar' },
    { title: 'Français', route: 'Fr' },
    { title: 'Anglais', route: 'Ang' },
    { title: 'Informatique', route: 'Inf' },
    {title: 'Histoire ', route: 'Hist'},
    {title: 'Géographie', route: 'Géo'},
    {title:"Education Islamique", route :'Isl'},
    {title:"Education Civile", route :'Civ'},
    {title: 'Philo', route: 'philo' },
    { title: 'Option', route: 'Opt' },



  ]
  matieresInfo=[
    { title: 'Informatique', route: 'Inf' },
    { title: 'Mathématiques', route: 'math' },
    { title: 'Arabe', route: 'Ar' },
    { title: 'Philo', route: 'philo' },
    { title: 'Français', route: 'fr' },
    { title: 'Anglais', route: 'Ang' }, 
    { title: 'Option', route: 'Opt' },

  ]
  matieresEcoGest=[
    {title: 'Economie ', route: 'Eco'},
    {title: 'Gestion', route: 'Gest'},
    {title: 'Histoire ', route: 'Hist'},
    {title: 'Géographie', route: 'Géo'},
    { title: 'Mathématiques', route: 'math' },
    { title: 'Arabe', route: 'Ar' },
    { title: 'Français', route: 'Fr' },
    { title: 'Anglais', route: 'Ang' },
    { title: 'Informatique', route: 'Inf' },
    {title: 'Philo', route: 'philo' },
    { title: 'Option', route: 'Opt' },

  ]
  niveau: string | null = null; 
  annee: string | null = null;
  section: string | null = null;
  matiere: string | null = null;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.niveau = params.get('niveau');
      this.annee = params.get('annee');
      this.section = params.get('section');
      
      
      
    });
  }
  goToType(route: string){
    this.router.navigateByUrl(`/tab/tabs/tab2/annee/${this.niveau}/section/${this.annee}/matiere-section/${ this.section}/type-document/${route}`)
  }

}
