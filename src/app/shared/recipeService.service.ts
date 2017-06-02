import {Recipe} from '../recipes/recipe.model';
import {Injectable} from '@angular/core';
import {Ingridient} from './ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppingListService.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

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

  getRecipe(index: number) {
    return this.recipes[index];
  }

    addIngredientsToShoppList(ingredients: Ingridient[]) {
      this.slService.addIngredients(ingredients);
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number , newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
