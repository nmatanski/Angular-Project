import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';
import { Meal } from '../menu/meal.model';
import { MealService } from './../menu/meal.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private mealService: MealService,
    private authService: AuthService) {
  }

  storeMenu() {
    const token = this.authService.getToken();

    // tslint:disable-next-line:max-line-length
    return this.http.put('https://course-project-5acd8.firebaseio.com/menu.json?auth=' + token, this.mealService.getMenu());
  }

  getMenu() {
    const token = this.authService.getToken();

    this.http.get('https://course-project-5acd8.firebaseio.com/menu.json?auth=' + token)
      .map(
        (response: Response) => {
          const menu: Meal[] = response.json();
          // tslint:disable-next-line:prefer-const
          // for (let meal of menu) {
          //   if (!meal['ingredients']) {
          //     meal['ingredients'] = [];
          //   }
          // }
          return menu;
        }
      )
      .subscribe(
        (menu: Meal[]) => {
          this.mealService.setMenu(menu);
        }
      );
  }
}
