import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/food.category';
import { Food } from '../shared/food.model';
@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {
  public  newFood: Food = new Food('', new Date(), Category.VEGETABLES, '');
  public name: string = '';
  public expDate: Date;
  public category: Category;
  categories =  Category;
  public categoryOptions = [];
  keys: string[];
  @Output() foodAdded = new EventEmitter<Food>();

  constructor() {
   }

  ngOnInit(): void {
    this.categoryOptions = Object.keys(this.categories);

  }

  onAddFood() {
    let newFood = new Food(this.name, this.expDate, this.category, '');
    this.foodAdded.emit(newFood);
  }
}
