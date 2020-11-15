import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodListEntryComponent } from './food-list/food-list-entry/food-list-entry.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FormsModule } from '@angular/forms';
import { TileColorDirective } from './shared/tileColor.directive';
import { FoodService } from './services/food.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FoodListComponent,
    FoodListEntryComponent,
    FoodEditComponent,
    TileColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
