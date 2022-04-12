import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  searchFood(query: string) {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=10&json=true`
    let obsTracks = this.http.get(url);
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getFood(id: string) {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}`;
    
    return this.http.get(url);
  }
}
