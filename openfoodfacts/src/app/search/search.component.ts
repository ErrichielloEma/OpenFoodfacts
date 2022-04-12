import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string = "";
  obsFood: Observable<Object>;
  results: any;

  constructor(public openfoodfacts: ServiceService) {
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }

    this.query = query.value;
    this.obsFood = this.openfoodfacts.searchFood(this.query);
    this.obsFood.subscribe((data) => { this.results = data; console.log(this.results) });
  }
  
  ngOnInit(): void {
  }

}
