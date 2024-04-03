import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  isAuthenticated = false;

  educationLevels = [
    { title: 'Primaire', image: 'assets/images/primaire.jpg', route: 'primaire' },
    { title: 'Collège', image: 'assets/images/collège.jpg', route: 'college' },
    { title: 'Secondaire', image: 'assets/images/lycée.jpg', route: 'secondaire' },
  ];

  constructor(private route:Router,private authService: AuthService) {}
  
  ngOnInit() : void {
    this.authService.isLoggedIn().subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });

  }
  goToEducationLevel(route: string) {
    this.route.navigateByUrl(`/tab/tabs/tab2/annee/${route}`);
  }
}
