import { MealService } from './../meal.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  meal: Meal;
  id: number;

  constructor(private mealService: MealService,
    private route: ActivatedRoute,
    private router: Router, private authService: AuthService) {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']; // + converts the id to a number
          this.meal = this.mealService.getMeal(this.id);
        }
      );
  }

  // onAddToShoppingList() {
  //   this.mealService.addIngredientsToShoppingList(this.meal.ingredients);
  // }

  onEditMeal() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteMeal() {
    this.mealService.deleteMeal(this.id);
    this.router.navigate(['/menu']);
  }

}
