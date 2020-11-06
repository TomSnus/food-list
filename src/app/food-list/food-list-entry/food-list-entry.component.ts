import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-food-list-entry',
  templateUrl: './food-list-entry.component.html',
  styleUrls: ['./food-list-entry.component.css']
})
export class FoodListEntryComponent implements OnInit {
  @Input() element: Food;
  @Output() foodDeleted = new EventEmitter<Food>();

  constructor() { }

  ngOnInit(): void {
  }

  getExpDays() {
    return this.calculateDiff(new Date(this.element.date))
  }

  calculateDiff(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);

    return -1 * Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));
  }

  isRed(){
    return this.getExpDays() <=5;
  }

  isGreen(){
    return this.getExpDays() > 30;
  }
  isYellow(){
    return this.getExpDays() < 30 && this.getExpDays() > 5;
  }

  onFoodDeleted() {
    this.foodDeleted.emit(this.element);
  }
}
