import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.page.html',
  styleUrls: ['./matiere.page.scss'],
})
export class MatierePage implements OnInit {
  matieresPr12=[
    { title: 'Sciences Naturelles', route: '1' },
    { title: 'Mathématiques', route: '2' },
    { title: 'Arabe', route: '3' },
  ]
  matieresPr34=[
    { title: 'Sciences Naturelles', route: '1' },
    { title: 'Mathématiques', route: '2' },
    { title: 'Arabe', route: '3' },
    { title: 'Français', route: '4' },
  ]
  matieresPr56=[
    { title: 'Sciences Naturelles', route: '1' },
    { title: 'Mathématiques', route: '2' },
    { title: 'Arabe', route: '3' },
    { title: 'Français', route: '4' },
    { title: 'Anglais', route: '5' },
    { title: 'Informatique', route: '6' },

  ]
  matieresCollege=[
    { title: 'Sciences Naturelles', route: '1' },
    { title: 'Mathématiques', route: '2' },
    {title:"Physique", route :'11'},
    { title: 'Arabe', route: '3' },
    { title: 'Français', route: '4' },
    { title: 'Anglais', route: '5' },
    { title: 'Informatique', route: '6' },
    {title: 'Histoire ', route: '7'},
    {title: 'Géographie', route: '8'},
    {title:"Education Islamique", route :'9'},
    {title:"Education Civile", route :'10'}

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
