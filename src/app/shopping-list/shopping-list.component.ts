import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomato', 7),
  // ];
  ingredients: Ingredient[];
  constructor(private slservice: ShoppingListService){

  }
  ngOnInit() {
    this.ingredients = this.slservice.getIngredients();
    this.slservice.ingredientsChanged
    .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    })
  }
  // addIngredient(Ingredient: Ingredient) {
  //   this.ingredients.push(Ingredient);
  // }
}
