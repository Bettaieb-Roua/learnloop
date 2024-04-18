import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:8080';
  
  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();


  constructor(private http: HttpClient) { }
  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }
  login(email: string, password: string): Observable<boolean> {

    if (email === 'a' && password === 'a') {
      this.isAuthenticatedSubject.next(true);
      return this.isAuthenticated$;
    } else {
      this.isAuthenticatedSubject.next(false);
      return this.isAuthenticated$;
    }
  }
  signup(userData: any): Observable<any> {
    const url = `${this.apiUrl}/user/register`; // Endpoint pour l'inscription dans votre API
    return this.http.post(url, userData);
  }
  
  logout(): void {
    // Votre logique de déconnexion ici
    this.isAuthenticatedSubject.next(false);
  }
}
