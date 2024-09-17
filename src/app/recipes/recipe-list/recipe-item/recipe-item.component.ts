import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

// @Input() recipeElement: {name: string, desc: string, imagePath: string};
@Input() recipeElement: Recipe;
@Input() recipeElIndex: number;
@Output() recipeClicked = new EventEmitter<number>(); 
recipeItemClick(recipeIndex: number) {
  // throw new Error('Method not implemented.');
  // console.log(recipeIndex);
  this.recipeClicked.emit(recipeIndex);
  }

}
