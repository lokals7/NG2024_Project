import { Component, input, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  // @Input() recipeElement: {name: string, desc: string, imagePath: string};
  @Input() recipeElement: Recipe;
  @Input() recipeElIndex: number;
  // @Input() recipe:Recipe;
  // @Output() recipeClicked = new EventEmitter<number>();
  // recipeItemClick(recipeIndex: number) {
  //   // throw new Error('Method not implemented.');
  //   // console.log(recipeIndex);
  //   this.recipeClicked.emit(recipeIndex);
  //   }
  constructor(private recipeService: RecipeService){

  }
  recipeItemClick() {
    this.recipeService.recipeSelected.emit(this.recipeElement);
  }
}
