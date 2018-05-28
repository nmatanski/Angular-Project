import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './shopping-cart.model';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public orders: ShoppingCart[] = [];
  constructor(private dataStorageService: DataStorageService,
  private shoppingCartService: ShoppingCartService,
  private authService: AuthService) { }

  ngOnInit() {

    this.dataStorageService.storeOrders()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );

    this.dataStorageService.getOrdersWithoutToken();

    // this.shoppingCartService.carts;
    console.log('onInit cart: ');
    console.log(this.shoppingCartService.carts);
    for (let index = 0; index < this.shoppingCartService.carts.length; index++) {
      this.orders.push(this.shoppingCartService.carts[index]);
    }
    console.log('onInit local cart: ');
    console.log(this.orders);
  }

  onFetchData() {
    this.dataStorageService.getOrdersWithoutToken();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  getEmail() {
    if (!this.isAuthenticated()) {
      return '!@#$%^&*^%$#@!#$%^&*^%$#@';
    }
    console.log('getEmail: ');
    
    console.log(this.authService.getEmailOfAuthenticatedUser());
    return this.authService.getEmailOfAuthenticatedUser();
  }

}
