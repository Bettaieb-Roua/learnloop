import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedTabSubject = new BehaviorSubject<string>('tab2');
  selectedTab$ = this.selectedTabSubject.asObservable();

  

  private selectedRoleSubject = new BehaviorSubject<string>('client');
  selectedRole$ = this.selectedRoleSubject.asObservable();

  constructor() { }
  updateSelectedTab(tab: string) {
    this.selectedTabSubject.next(tab);
  }

  updateSelectedRole(role: string) {
    this.selectedRoleSubject.next(role);
  }
}
