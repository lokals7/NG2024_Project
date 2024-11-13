import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameIn: ElementRef;
  @ViewChild('amountInput', {static: false}) amountIn: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  onAddItem(){
// console.log(this.nameIn.nativeElement.value);
  let newIngredient = new Ingredient(this.nameIn.nativeElement.value, this.amountIn.nativeElement.value);
  this.ingredientAdded.emit(newIngredient);
}
}
