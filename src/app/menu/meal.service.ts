import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

// import { ShoppingCartService } from '../shopping-list/shopping-list.service';
import { Meal } from './meal.model';

@Injectable()
export class MealService {
  menuChanged = new Subject<Meal[]>();

  private menu: Meal[] = [
    new Meal(
      'Strawberry Eton Mess with Matcha Meringues and Yuzu',
      "The eton mess is traditional british dessert, but combined with the matcha green tea and the yuzu citrus fruit from Japan makes it the best fusuion style dessert you'll ever try.",
      'https://i.imgur.com/DA43fYA.jpg',
      10
    ),
    new Meal(
      'Test Name',
      'Test description',
      'https://i.imgur.com/DA43fYA.jpg',
      5
    )
  ];

  constructor() { } // private slService: ShoppingCartService ?

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

  // addMealToShoppingCart(meal: Meal[]) {
  //   this.slService.addMeals(meals);
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
