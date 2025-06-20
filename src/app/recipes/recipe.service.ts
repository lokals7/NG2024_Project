import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private ingredient: Ingredient;
  private recipes: Recipe[] = [
    new Recipe(
      `Baboy`,
      'Description 1',
      'https://upload.wikimedia.org/wikipedia/commons/3/36/Pork_Hamonado_%28Mindanao%29_cooked_afritada-style_%28with_tomato_sauce%29.jpg',
      [
        new Ingredient('Pork',1),
        new Ingredient('Sabaw',2)
      ]
    ),
    new Recipe(
      'Manok',
      'Description 2',
      'https://www.maggi.ph/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/6be23d6515053571fdebf14d9ea37e35.jpg?h=5c87dc81&itok=OS3FkDrS',
      [
        new Ingredient('Manok',2),
        new Ingredient('Sabaw',2)
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredient: Ingredient[]){
    this.slService.addIngredients(ingredient)
  }
}
