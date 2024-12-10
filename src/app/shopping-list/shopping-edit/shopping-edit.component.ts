import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameIn: ElementRef;
  @ViewChild('amountInput', {static: false}) amountIn: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slservice: ShoppingListService){

  }
  onAddItem(){
// console.log(this.nameIn.nativeElement.value);
  let newIngredient = new Ingredient(this.nameIn.nativeElement.value, this.amountIn.nativeElement.value);
  // this.ingredientAdded.emit(newIngredient);
  this.slservice.addIngredient(newIngredient);
}
}
