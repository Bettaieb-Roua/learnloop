import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-matiere-section',
  templateUrl: './matiere-section.page.html',
  styleUrls: ['./matiere-section.page.scss'],
})
export class MatiereSectionPage implements OnInit {
  matieresMSc=[
    { title: 'Sciences Naturelles', route: 'Sciences Naturelles' },
    { title: 'Mathématiques', route: 'Mathématiques' },
    {title:"Physique", route :'Physique'},
    { title: 'Arabe', route: 'Arabe' },
    { title: 'Philo', route: 'Philo' },
    { title: 'Français', route: 'Français' },
    { title: 'Anglais', route: 'Anglais' },
    { title: 'Informatique', route: 'Informatique' },
    { title: 'Option', route: 'Option' },
  ]
  matieresLettre=[
    { title: 'Arabe', route: 'Arabe' },
    { title: 'Français', route: 'Français' },
    { title: 'Anglais', route: 'Anglais' },
    { title: 'Informatique', route: 'Informatique' },
    {title: 'Histoire ', route: 'Histoire'},
    {title: 'Géographie', route: 'Géographie'},
    {title:"Education Islamique", route :'Education Islamique'},
    {title:"Education Civile", route :'Education Civile'},
    {title: 'Philo', route: 'Philo' },
    { title: 'Option', route: 'Option' },



  ]
  matieresInfo=[
    { title: 'Informatique', route: 'Informatique' },
    { title: 'Mathématiques', route: 'Mathématiques' },
    { title: 'Arabe', route: 'Arabe' },
    { title: 'Philo', route: 'Philo' },
    { title: 'Français', route: 'Français' },
    { title: 'Anglais', route: 'Anglais' }, 
    { title: 'Option', route: 'Option' },

  ]
  matieresEcoGest=[
    {title: 'Economie ', route: 'Economie'},
    {title: 'Gestion', route: 'Gestion'},
    {title: 'Histoire ', route: 'Histoire'},
    {title: 'Géographie', route: 'Géographie'},
    { title: 'Mathématiques', route: 'Mathématiques' },
    { title: 'Arabe', route: 'Arabe' },
    { title: 'Français', route: 'Français' },
    { title: 'Anglais', route: 'Anglais' },
    { title: 'Informatique', route: 'Informatique' },
    {title: 'Philo', route: 'Philo' },
    { title: 'Option', route: 'Option' },

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
