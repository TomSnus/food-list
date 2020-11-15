import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/food.model';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Food[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodList = this.foodService.getListItems()
  }

  ngOnChanges(): void {
    this.sortList();
  }
  sortList() {
    this.foodList.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
}
