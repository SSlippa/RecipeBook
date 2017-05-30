import {Ingridient} from './ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
   ingredientsChanged = new EventEmitter<Ingridient[]>();

   private ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatos', 10)
  ];

  onIngredientAdded(ingredientData: Ingridient) {
    this.ingredients.push(ingredientData);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingridient[]) {
    // for (let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
