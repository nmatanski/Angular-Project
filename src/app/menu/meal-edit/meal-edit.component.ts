import { DataStorageService } from './../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MealService } from '../meal.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.css']
})
export class MealEditComponent implements OnInit {

  id: number;
  editMode = false;
  mealForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private mealService: MealService,
    private dataStorageService: DataStorageService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],

    if (this.editMode) {
      this.mealService.updateMeal(this.id, this.mealForm.value);
    } else {
      this.mealService.addMeal(this.mealForm.value);
    }

    this.dataStorageService.storeMenu()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );

    this.onCancel();
  }






  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // getControls() {

  // }

  private initForm() {
    let mealName = '';
    let mealImagePath = '';
    let mealDescription = '';
    let mealPrice = 0;

    if (this.editMode) {
      const meal = this.mealService.getMeal(this.id);
      mealName = meal.name;
      mealImagePath = meal.imagePath;
      mealDescription = meal.description;
      mealPrice = meal.price;
    }

    this.mealForm = new FormGroup({
      'name': new FormControl(mealName, Validators.required),
      'imagePath': new FormControl(mealImagePath, Validators.required),
      'description': new FormControl(mealDescription, Validators.required),
      'price': new FormControl(mealPrice, Validators.required)

    });
  }

}
