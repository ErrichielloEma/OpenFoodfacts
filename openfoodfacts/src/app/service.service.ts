import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  searchFood(query: string) {
    const url = ``;
    
    let obsTracks = this.http.get(url);
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
