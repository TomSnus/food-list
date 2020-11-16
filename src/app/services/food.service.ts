import { Injectable, Output, EventEmitter } from '@angular/core';
import { Category } from '../shared/food.category';
import { Food } from '../shared/food.model';

@Injectable()
export class FoodService {
    @Output() editFood = new EventEmitter<Food>();
    foodList: Food[] = [
        new Food('Cucumber', new Date('2020-11-20'), Category.VEGETABLES, 'https://www.fr.de/bilder/2019/01/03/11416580/788292061-1181337-3Fec.jpg'),
        new Food('Tomato', new Date('2020-11-10'), Category.VEGETABLES, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/800px-Bright_red_tomato_and_cross_section02.jpg')
    ];

    //alternative: add .slice() to return a copy and notify view by a event
    getListItems() {
        return this.foodList;
    }

    addFoodItem(item: Food) {
        this.foodList.push(item);
    }

    removeFoodItem(item: Food) {
        const index: number = this.foodList.indexOf(item);
        if (index !== -1) {
            this.foodList.splice(index, 1);
        }
    }

    editFoodItem(food: Food) {
        //remove item to be edited to prevent duplicates
        this.removeFoodItem(food);
        this.editFood.emit(food);
    }
}
