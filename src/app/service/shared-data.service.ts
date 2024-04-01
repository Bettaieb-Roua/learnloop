import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedRoleSubject = new BehaviorSubject<string>('client');
  selectedRole$ = this.selectedRoleSubject.asObservable();

  constructor() { }
  updateSelectedRole(role: string) {
    this.selectedRoleSubject.next(role);
  }
}
