import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../shared/food.model';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() foodList: Food[];
  @Output() foodDeleted = new EventEmitter<Food>();

  constructor() {
  }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    this.sortList();
  }
  sortList(){
    this.foodList.sort((a,b)=>new Date(a.date).getTime()-new Date(b.date).getTime());
  }
  onFoodDeleted(element: Food) {
    this.foodDeleted.emit(element);
  }
}
