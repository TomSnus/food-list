import { Component, Output } from '@angular/core';
import * as  data from './data/food.json';
import { EventEmitter } from 'protractor';
import { Food } from './shared/food.model';
import { Category } from './shared/food.category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-list';
  foodList: Food[] = [
    new Food('Cucumber', new Date('2020-11-20'),Category.VEGETABLES ,  'https://www.fr.de/bilder/2019/01/03/11416580/788292061-1181337-3Fec.jpg'),
    new Food('Tomato', new Date('2020-11-10'), Category.VEGETABLES, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/800px-Bright_red_tomato_and_cross_section02.jpg')
  ];

  constructor() {
  }

  onFoodAdded(foodData: Food) {
    this.foodList.push(foodData);
    this.foodList = this.foodList.slice();
  }

  onFoodDeleted(element: Food){
    this.foodList = this.foodList.filter(function( obj ) {
      return obj.name !== element.name;
  });  }
}
