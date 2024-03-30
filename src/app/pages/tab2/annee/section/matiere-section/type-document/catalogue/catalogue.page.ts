import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }
  niveau: string | null = null; 
  annee: string | null = null;
  section: string | null = null;
  matiere: string | null = null;
  typeDocument: string | null = null;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.niveau = params.get('niveau');
      this.annee = params.get('annee');
      this.section = params.get('section');
      this.matiere = params.get('matiere');
      this.typeDocument=params.get('typeDocument');
      console.log(this.typeDocument)
      
      
      
    });
  }

}
