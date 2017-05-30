import {Recipe} from '../recipes/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingridient} from './ingredient.model';
import {ShoppingListService} from './shoppingListService.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('Pan Cake', 'Tasty', 'http://img1.russianfood.com/dycontent/images_upl/28/big_27831.jpg',
    [
      new Ingridient('Milk', 1)
    ]),
    new Recipe('Schnitzel', 'Very Big',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingridient('Schnitzel', 1),
        new Ingridient('French Fries', 20)
      ]),
    new Recipe('Hamburger', 'So Mmmm',
      'https://www.kingsford.com/wp-content/uploads/2014/11/kfd-howtohamburger-Burgers_5_0391-1024x621.jpg',
      [
        new Ingridient('Kotleta', 1),
        new Ingridient('French Fries', 20)
      ])
  ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
      return this.recipes.slice();
    }

  getRecipeID(index: number) {
    return this.recipes[index];
  }

    addIngredientsToShoppList(ingredients: Ingridient[]) {
      this.slService.addIngredients(ingredients);
    }
}
