import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService) {}
  ngOnInit() {}
  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipeSelected.ingredients)
  }
  @Input() recipeSelected: Recipe;
}
