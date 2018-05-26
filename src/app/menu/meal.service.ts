import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Meal } from './meal.model';

@Injectable()
export class MealService {
  menuChanged = new Subject<Meal[]>();

  private menu: Meal[] = [
    new Meal(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
    ),
    new Meal('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
    )
  ];

  constructor() { } // private slService: ShoppingListService

  setMenu(menu: Meal[]) {
    this.menu = menu;
    this.menuChanged.next(this.menu.slice());
  }

  getMenu() {
    return this.menu.slice();
  }

  getMeal(index: number) {
    return this.menu[index];
  }

  // addIngredientsToShoppingList(ingredients: Ingredient[]) {
  //   this.slService.addIngredients(ingredients);
  // }

  addMeal(meal: Meal) {
    this.menu.push(meal);
    this.menuChanged.next(this.menu.slice());
  }

  updateMeal(index: number, newMeal: Meal) {
    this.menu[index] = newMeal;
    this.menuChanged.next(this.menu.slice());
  }

  deleteMeal(index: number) {
    this.menu.splice(index, 1);
    this.menuChanged.next(this.menu.slice());
  }
}
