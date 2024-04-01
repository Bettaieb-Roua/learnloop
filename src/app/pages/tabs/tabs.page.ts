import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/service/shared-data.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  selectedRole: string = '';

  constructor(private router:Router, private sharedDataService:SharedDataService) {
  }
  logout(){
    this.router.navigateByUrl('/login')
  }
  goToProfile(){
this.router.navigateByUrl('/profile')
  }
  ngOnInit(): void {
    this.sharedDataService.selectedRole$.subscribe(role => {
      this.selectedRole = role;
    });
    
  }

}
