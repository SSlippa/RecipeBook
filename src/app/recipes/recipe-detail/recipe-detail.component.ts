import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingridient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shopping-list/shoppingListService.service';
import {RecipeService} from '../../shared/recipeService.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   choosenRecipeDetail: Recipe;
   id: number;

  // constructor(private shoppingListService: ShoppingListService) { }
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(          // Слушает входящие параметры из линка
      (params: Params) => {
        this.id = +params['id'];
        this.choosenRecipeDetail = this.recipeService.getRecipeID(this.id);
      }
    );
}

  ingredientsToList() {
    // this.recipeService.addIngredientsToShoppList(this.choosenRecipeDetail.ingredients);
    this.recipeService.addIngredientsToShoppList(this.choosenRecipeDetail.ingredients);
}

}
