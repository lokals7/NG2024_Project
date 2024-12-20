import { Component, OnInit, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  // @Output() recipeSelectedClick = new EventEmitter<Recipe>();
  recipeSelected: number; 
  recipes: Recipe[];

constructor(private recipeService: RecipeService){

}
ngOnInit(){
  this.recipes = this.recipeService.getRecipes();
}
// recipeEmitted(recipeIndex: number){
// this.recipeSelected = recipeIndex;
// this.recipeSelectedClick.emit(this.recipes[this.recipeSelected]);
// }
}
