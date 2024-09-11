import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'Description', 'https://upload.wikimedia.org/wikipedia/commons/3/36/Pork_Hamonado_%28Mindanao%29_cooked_afritada-style_%28with_tomato_sauce%29.jpg'),
  new Recipe('A Test Recipe', 'Description', 'https://upload.wikimedia.org/wikipedia/commons/3/36/Pork_Hamonado_%28Mindanao%29_cooked_afritada-style_%28with_tomato_sauce%29.jpg')
];

constructor(){

}
ngOnInit(){
  
}
}
