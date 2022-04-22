import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ServiceService } from '../service.service';
import { Observable } from 'rxjs';
import {Location} from '@angular/common'

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foodServiceObs: Observable<Object>;
  routeObs: Observable<ParamMap>;
  food: any; //Qui salverò il cibo selezionato

  constructor(    
    private route: ActivatedRoute,
    private service: ServiceService,
    private location: Location ) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let foodId = params.get('id'); //Ottengo l'id dai parametri
 
    this.foodServiceObs = this.service.getFood(foodId);
    this.foodServiceObs.subscribe((data) => {console.log(data);this.food = data})
     //Stampo su console
  }

  back() : void
  {
    this.location.back();
  }

}
