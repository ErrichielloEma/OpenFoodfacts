import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  obsFood: Observable<Object>;
  results: any;
  constructor() { }
  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;

  }

  ngOnInit(): void {
  }

}
