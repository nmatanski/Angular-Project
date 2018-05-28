// import { Ingredient } from '../shared/ingredient.model';

export class Meal {
  public name: string;
  public description: string;
  public imagePath: string;
  public price: number;
  //   public ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, price: number) { // ingredients: Ingredient[]
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.price = price;
    // this.ingredients = ingredients;
  }
}
