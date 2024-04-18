import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from 'src/models/interface-product';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private apiUrl = 'https://exemple.com/api/documents'; // Remplacez cela par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Méthode pour envoyer les données du document à l'API
  addDocument(document: product): Observable<any> {
    return this.http.post<any>(this.apiUrl, document);
  }
}
