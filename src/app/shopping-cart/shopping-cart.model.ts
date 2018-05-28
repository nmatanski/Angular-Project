import { Meal } from '../menu/meal.model';

export class ShoppingCart {
    public name: String;
    public address: String;
    public email: String;
    public cart: Meal[];

    constructor(name: String, address: String, email: String, cart: Meal[]) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.cart = cart;
    }
}
