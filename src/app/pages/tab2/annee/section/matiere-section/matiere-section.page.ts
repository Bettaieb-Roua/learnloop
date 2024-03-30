import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matiere-section',
  templateUrl: './matiere-section.page.html',
  styleUrls: ['./matiere-section.page.scss'],
})
export class MatiereSectionPage implements OnInit {
  matieresMSc=[
    { title: 'Sciences Naturelles', route: '1' },
    { title: 'Mathématiques', route: '2' },
    {title:"Physique", route :'11'},
    { title: 'Arabe', route: '3' },
    { title: 'Philo', route: '3' },
    { title: 'Français', route: '4' },
    { title: 'Anglais', route: '5' },
    { title: 'Informatique', route: '6' },
    { title: 'Option', route: '7' },
  ]
  matieresLettre=[
    { title: 'Arabe', route: '3' },
    { title: 'Français', route: '4' },
    { title: 'Anglais', route: '5' },
    { title: 'Informatique', route: '6' },
    {title: 'Histoire ', route: '7'},
    {title: 'Géographie', route: '8'},
    {title:"Education Islamique", route :'9'},
    {title:"Education Civile", route :'10'},
    {title: 'Philo', route: '3' },
    { title: 'Option', route: '7' },



  ]
  matieresInfo=[
    { title: 'Informatique', route: '6' },
    { title: 'Mathématiques', route: '2' },
    { title: 'Arabe', route: '3' },
    { title: 'Philo', route: '3' },
    { title: 'Français', route: '4' },
    { title: 'Anglais', route: '5' }, 
    { title: 'Option', route: '7' },

  ]
  matieresEcoGest=[
    {title: 'Economie ', route: '7'},
    {title: 'Gestion', route: '8'},
    {title: 'Histoire ', route: '7'},
    {title: 'Géographie', route: '8'},
    { title: 'Mathématiques', route: '2' },
    { title: 'Arabe', route: '3' },
    { title: 'Français', route: '4' },
    { title: 'Anglais', route: '5' },
    { title: 'Informatique', route: '6' },
    {title: 'Philo', route: '3' },
    { title: 'Option', route: '7' },

  ]
  niveau: string | null = null; 
  annee: string | null = null;
  section: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.niveau = params.get('niveau');
      this.annee = params.get('annee');
      this.section = params.get('section');
      
      
    });
  }

}
