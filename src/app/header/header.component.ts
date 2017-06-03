import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../shared/recipeService.service';
import {Recipe} from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  message = '';

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.recipeService.storeRecipes(this.recipeService.getRecipes()).subscribe(
      (response) => {
        console.log(response);
        this.message = 'Save successful';
        setTimeout(() => {
          this.message = '';
        }, 2000);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onFetchData() {
    this.recipeService.getRecipesFromServer();
    this.message = 'Fetch successful';
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }
}

