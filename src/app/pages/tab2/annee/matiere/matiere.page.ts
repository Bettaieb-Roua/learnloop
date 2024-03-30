import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.page.html',
  styleUrls: ['./matiere.page.scss'],
})
export class MatierePage implements OnInit {
  matieresPr12=[
    { title: 'Sciences Naturelles', route: 'Sciences Naturelles' },
    { title: 'Mathématiques', route: 'Mathématiques' },
    { title: 'Arabe', route: 'Arabe' },
  ]
  matieresPr34=[
    { title: 'Sciences Naturelles', route: 'Sciences Naturelles' },
    { title: 'Mathématiques', route: 'Mathématiques' },
    { title: 'Arabe', route: 'Arabe' },
    { title: 'Français', route: 'Français' },
  ]
  matieresPr56=[
    { title: 'Sciences Naturelles', route: 'Sciences Naturelles' },
    { title: 'Mathématiques', route: 'Mathématiques' },
    { title: 'Arabe', route: 'Arabe' },
    { title: 'Français', route: 'Français' },
    { title: 'Anglais', route: 'Anglais' },
    { title: 'Informatique', route: 'Informatique' },

  ]
  matieresCollege=[
    { title: 'Sciences Naturelles', route: 'Sciences Naturelles' },
    { title: 'Mathématiques', route: 'Mathématiques' },
    {title:"Physique", route :'Physique'},
    { title: 'Arabe', route: 'Arabe' },
    { title: 'Français', route: 'Français' },
    { title: 'Anglais', route: 'Anglais' },
    { title: 'Informatique', route: 'Informatique' },
    {title: 'Histoire ', route: 'Histoire'},
    {title: 'Géographie', route: 'Géographie'},
    {title:"Education Islamique", route :'Education Islamique'},
    {title:"Education Civile", route :'Education Civile'}

  ]
 


  niveau: string | null = null; 
  annee: string | null = null;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.niveau = params.get('niveau');
      this.annee = params.get('annee');
      
    });
  }
  goToType(route: string){
    this.router.navigateByUrl(`/tab/tabs/tab2/annee/${this.niveau}/matiere/${this.annee}/type-document/${route}`)
  }

}
