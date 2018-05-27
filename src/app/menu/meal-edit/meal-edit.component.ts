import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MealService } from '../meal.service';

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
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.mealService.updateMeal(this.id, this.mealForm.value);
    } else {
      this.mealService.addMeal(this.mealForm.value);
    }
    this.onCancel();
  }

  // onAddIngredient() {
  //   (<FormArray>this.mealForm.get('ingredients')).push(
  //     new FormGroup({
  //       'name': new FormControl(null, Validators.required),
  //       'amount': new FormControl(null, [
  //         Validators.required,
  //         Validators.pattern(/^[1-9]+[0-9]*$/)
  //       ])
  //     })
  //   );
  // }

  // onDeleteIngredient(index: number) {
  //   (<FormArray>this.mealForm.get('ingredients')).removeAt(index);
  // }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  // getControls() {
  //   return (<FormArray>this.mealForm.get('ingredients')).controls;
  // }

  private initForm() {
    let mealName = '';
    let mealImagePath = '';
    let mealDescription = '';
    // let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const meal = this.mealService.getMeal(this.id);
      mealName = meal.name;
      mealImagePath = meal.imagePath;
      mealDescription = meal.description;
      // if (meal['ingredients']) {
      //   for (let ingredient of meal.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         'name': new FormControl(ingredient.name, Validators.required),
      //         'amount': new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     );
      //   }
      // }
    }

    this.mealForm = new FormGroup({
      'name': new FormControl(mealName, Validators.required),
      'imagePath': new FormControl(mealImagePath, Validators.required),
      'description': new FormControl(mealDescription, Validators.required)
      // 'ingredients': recipeIngredients
    });
  }

}
