import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../shared/recipeService.service';
import {Subscription} from 'rxjs/Subscription';
import {style, state, trigger, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  // animations: [
  //   trigger('animatedInOut', [
  //     state('in', style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })),
  //     transition('void => *', [
  //       style({
  //         opacity: 0,
  //         transform: 'translateX(-300px)'
  //       }),
  //       animate(300)
  //     ]),
  //     transition('* => void', [
  //       animate(300, style({
  //         transform: 'translateX(-300px)',
  //         opacity: 0,
  //       }))
  //     ]),
  //   ])
  // ]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private subscription: Subscription;

  constructor(private recipeService: RecipeService) { }


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
