import {Recipe} from '../recipes/recipe.model';
import {Injectable} from '@angular/core';
import {Ingridient} from './ingredient.model';
import {ShoppingListService} from '../shopping-list/shoppingListService.service';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth/auth.service';

@Injectable()
  export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  email: string;

    private recipes: Recipe[] = [
    new Recipe('Pan Cake', 'Tasty', 'http://img1.russianfood.com/dycontent/images_upl/28/big_27831.jpg',
    [
      new Ingridient('Milk', 1)
    ])
  ];

    constructor(private slService: ShoppingListService,
                private http: Http,
                private authService: AuthService) {}

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

  storeRecipes(recipes: Recipe[]) {
    const token =  this.authService.getToken();
    return this.http.put('https://recipebook-b8c2f.firebaseio.com/' + this.email + '.json?auth=' + token, recipes); //  {headers: headers}
  }

  // getRecipesFromServer() {
  //   return this.http.get('https://recipebook-b8c2f.firebaseio.com/data.json').map(
  //     (response: Response) => {
  //       const data = response.json();
  //       return data;
  //     }
  //   ).catch(
  //     (error: Response) => {
  //       return Observable.throw('Something Went Wrong');
  //     }
  //   );
  // }
  getRecipesFromServer() {
     const token =  this.authService.getToken();

    return this.http.get('https://recipebook-b8c2f.firebaseio.com/' + this.email + '.json?auth=' + token).map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for ( let recipe of recipes) {
          if (!recipe.ingredients) {
            recipe.ingredients = [];
          }
        }
        return recipes;
      }
    )
      .subscribe(
      (recipes: Recipe[]) => {

        this.setUpRecepiesFromServer(recipes);
      }
    );
  }

      setUpRecepiesFromServer(recipes: Recipe[]) {
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes.slice());
  }

}
