import { ShoppingCart } from './../../shopping-cart/shopping-cart.model';
import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';
import { MealService } from './../meal.service';
import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {

  meal: Meal;
  id: number;
  public cart: ShoppingCart = new ShoppingCart (
    '',
    '',
    '',
    null
  );
  flag = false;
  editMode = false;
  orderInfoForm: FormGroup;

  constructor(private mealService: MealService,
    private cartService: ShoppingCartService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
      this.cartService.addNewCart(new ShoppingCart ('', '', this.authService.getEmailOfAuthenticatedUser(), this.cart.cart));
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

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.cartService.updateCart(this.orderInfoForm.value);
    } else {
      this.cartService.addNewCart(this.orderInfoForm.value);
    }

    this.dataStorageService.storeOrders()
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

  // private initForm() {
  //   let orderName: String = '';
  //   let orderAddress: String = '';
  //   let orderContactInfo: String = '';
  //   // let recipeIngredients = new FormArray([]);

  //   if (this.editMode) {
  //     const order = this.cartService.getCart(this.id);
  //     orderName = order.name;
  //     orderAddress = order.address;
  //     orderContactInfo = order.email;
  //   }

  //   this.orderInfoForm = new FormGroup({
  //     'name': new FormControl(orderName, Validators.required),
  //     'address': new FormControl(orderAddress, Validators.required),
  //     'contactInfo': new FormControl(orderContactInfo, Validators.required)
  //     // 'ingredients': recipeIngredients
  //   });
  // }

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

  addToCart(meal: Meal) {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/signin']);
      return;
    }
    if (this.cart.name === '') {
      this.flag = true;
      return;
    }
    this.cart.cart.push(meal);
    this.cartService.updateCart(this.cart);
    // this.cartService.addNewCart(new ShoppingCart ('', '', this.authService.getEmailOfAuthenticatedUser(), this.cart.cart));
  }

}
