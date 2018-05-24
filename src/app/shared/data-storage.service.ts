import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeMenuRecipes() {
    const token = this.authService.getToken();

    // tslint:disable-next-line:max-line-length
    return this.http.put('https://course-project-5acd8.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes()); // getMenuRecipes?
  }

  getMenuRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://course-project-5acd8.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes); // setMenuRecipes?
        }
      );
  }
}
