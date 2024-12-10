import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 7),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }
  constructor() {}
  addIngredient(Ingredient: Ingredient) {
    this.ingredients.push(Ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
