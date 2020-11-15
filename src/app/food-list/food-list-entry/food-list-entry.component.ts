import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-food-list-entry',
  templateUrl: './food-list-entry.component.html',
  styleUrls: ['./food-list-entry.component.css']
})
export class FoodListEntryComponent implements OnInit {
  @Input() element: Food;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

  getExpDays() {
    return this.calculateDiff(new Date(this.element.date))
  }

  calculateDiff(diffDate: Date) {
    let currentDate = new Date();
    diffDate = new Date(diffDate);
    return -1 * Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(diffDate.getFullYear(), diffDate.getMonth(), diffDate.getDate())) / (1000 * 60 * 60 * 24));
  }

  onFoodDeleted() {
    this.foodService.removeFoodItem(this.element);
  }

  onFoodEdit() {
    this.foodService.editFoodItem(this.element);
  }
}
