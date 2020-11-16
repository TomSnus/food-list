import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Category } from '../shared/food.category';
import { Food } from '../shared/food.model';
@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {
  @ViewChild('categoryCombo') categoryCombo: ElementRef;
  @Output() navigateBack = new EventEmitter<void>();
  @Input() editItem: Food;
  name: string = '';
  expDate: Date;
  imageUrl = 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
  category: Category;
  categories = Category;
  categoryOptions = [];
  keys: string[];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.categoryOptions = Object.keys(this.categories);
    //init attributes for editing
    if(this.editItem !== undefined){
      this.name = this.editItem.name;
      this.expDate = this.editItem.date;
      this.imageUrl = this.editItem.imageUrl;
      this.category = this.editItem.category;
    }
  }

  onAddFood() {
    let newFood = new Food(this.name, this.expDate, this.category, this.imageUrl);
    this.foodService.addFoodItem(newFood);
    this.navigateBack.emit();
  }
}
