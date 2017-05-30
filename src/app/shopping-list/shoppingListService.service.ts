import {Ingridient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
   ingredientsChanged = new Subject<Ingridient[]>();

   private ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatos', 10)
  ];

  onIngredientAdded(ingredientData: Ingridient) {
    this.ingredients.push(ingredientData);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingridient[]) {
    // for (let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
