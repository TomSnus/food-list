import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FoodService } from './services/food.service';
import { Food } from './shared/food.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'food-list';
  defaultComponent = 'food-list';
  loadedComponent = this.defaultComponent;
  editItem: Food;
  constructor(private foodService: FoodService) {
  }

  //reset editItem
  ngAfterViewInit(): void {
    this.editItem = undefined;
  }
  
  ngOnInit(): void {
    this.foodService.editFood.subscribe(
      (food: Food) => {
        this.loadedComponent = 'food-edit';
        this.editItem = food;
      }
    )
  }

  onNavigate(comp: string) {
    if (comp !== undefined)
      this.loadedComponent = comp;
    else
      this.loadedComponent = this.defaultComponent;
  }
}
