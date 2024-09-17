import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  @Output() recipeSelectedClick = new EventEmitter<Recipe>();
  recipeSelected: number; 
  recipes: Recipe[] = [
  new Recipe(`A Test Recipe 1`, 'Description 1', 'https://upload.wikimedia.org/wikipedia/commons/3/36/Pork_Hamonado_%28Mindanao%29_cooked_afritada-style_%28with_tomato_sauce%29.jpg'),
  new Recipe('A Test Recipe 2', 'Description 2', 'https://www.maggi.ph/sites/default/files/styles/home_stage_1500_700/public/srh_recipes/6be23d6515053571fdebf14d9ea37e35.jpg?h=5c87dc81&itok=OS3FkDrS')
];

constructor(){

}
ngOnInit(){
  
}
recipeEmitted(recipeIndex: number){
this.recipeSelected = recipeIndex;
this.recipeSelectedClick.emit(this.recipes[this.recipeSelected]);
}
}
