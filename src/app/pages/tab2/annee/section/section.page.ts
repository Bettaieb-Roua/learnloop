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
    { title: 'Sciences', route: '1' },
    { title: 'Lettres', route: '2' },
    { title: 'Informatique', route: '3' },
    { title: 'Economie & Gestion', route: '4' },
  ]
  sectionsTroisiemeBac =[
    { title: 'Maths', route: '1' },
    { title: 'Sciences', route: '2' },
    { title: 'Lettres', route: '3' },
    { title: 'Informatique', route: '4' },
    { title: 'Economie & Gestion', route: '5' },
  ]
  anneeSelectionnee: string | null = null;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.anneeSelectionnee = params.get('id');
  });

}
}