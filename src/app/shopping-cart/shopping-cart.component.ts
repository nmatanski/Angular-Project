import { ShoppingCartService } from './shopping-cart.service';
import { ShoppingCart } from './shopping-cart.model';
import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
// import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public orders: ShoppingCart[] = [];
  public loggedUser: String;

  constructor(private dataStorageService: DataStorageService,
  private shoppingCartService: ShoppingCartService,
  private authService: AuthService
  // private angularFireAuth: AngularFireAuth
) { }

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

    this.loggedUser = sessionStorage.getItem('currentUser');
    console.log('welcome: ' + this.loggedUser);

  }

  onFetchData() {
    this.dataStorageService.getOrdersWithoutToken();
    // test
    // this.getEmail();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  // getEmail() {
  //   if (!this.isAuthenticated()) {
  //     console.log(this.authService.token === null ? 'the token is null' : 'the token is not null');
  //     console.log('getEmail with token != null: ');
  //     console.log(this.authService.getEmailOfAuthenticatedUser());


  //     return '!@#$%^&*^%$#@!#$%^&*^%$#@';
  //   }
  //   console.log('getEmail: ');
  //   const temp = this.authService.getEmailOfAuthenticatedUser();
  //   console.log(temp);
  //   // console.log('getEmail: ');
  //   // console.log(this.angularFireAuth.auth.currentUser.email);
  //   return temp;
  // }

}
