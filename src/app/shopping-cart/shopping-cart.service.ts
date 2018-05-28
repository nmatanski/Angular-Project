import { ShoppingCart } from './shopping-cart.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Meal } from '../menu/meal.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  cartsChanged = new Subject<ShoppingCart[]>();
  public carts: ShoppingCart[] = [new ShoppingCart('test', 'testaddress', 'nmatanski@abv.bg', [
    new Meal(
      'Test Name',
      'Test description',
      'https://i.imgur.com/DA43fYA.jpg',
      5
    )
  ])];
  index = 0;

  constructor() {  }

  setCarts(carts: ShoppingCart[]) {
    this.carts = carts;
    this.cartsChanged.next(this.carts.slice());
  }

  getCarts() {
    return this.carts.slice();
  }

  getCart(index: number) {
    return this.carts[index];
  }

  addNewCart(cart: ShoppingCart) {
    this.carts.push(cart);
    this.cartsChanged.next(this.carts.slice());
  }

  addNewCarts(carts: ShoppingCart[]) {
    this.carts.push(...carts);
    this.cartsChanged.next(this.carts.slice());
  }

  updateCart(newCart: ShoppingCart) {
    this.carts[this.index++] = newCart;
    this.cartsChanged.next(this.carts.slice());
  }

  deleteCart(index: number) {
    this.carts.splice(index, 1);
    this.cartsChanged.next(this.carts.slice());
  }

  getCartByContactInfo(email: String) {
    this.carts.forEach(cart => {
      if (cart.email === email) {
        return cart;
      }
    });
  }

}
