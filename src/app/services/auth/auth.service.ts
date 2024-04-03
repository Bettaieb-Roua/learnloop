import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();


  constructor() { }
  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  login(email: string, password: string): Observable<boolean> {
       // Ici, vous devrez ajouter la logique pour vérifier l'authentification
    // par exemple, en envoyant une requête HTTP à un serveur pour vérifier les informations

    // Exemple simplifié pour la démonstration (vous devez implémenter une logique réelle)
    if (email === 'a' && password === 'a') {
      this.isAuthenticatedSubject.next(true);
      return this.isAuthenticated$;
    } else {
      this.isAuthenticatedSubject.next(false);
      return this.isAuthenticated$;
    }
  }
  
  logout(): void {
    // Votre logique de déconnexion ici
    this.isAuthenticatedSubject.next(false);
  }
}
