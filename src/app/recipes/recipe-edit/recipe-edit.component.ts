import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../shared/recipeService.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute,
  private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.InitForm();
      }
    );
  }

  private InitForm() {
    let recipeName = '';
    let imgLink = '';
    let description = '';
    let recipeingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imgLink = recipe.imagePath;
      description = recipe.description;
      if (recipe['ingredients']) {    // if (recipe.ingredients) need to try
        for (let ingredient of recipe.ingredients) {
          recipeingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, Validators.required),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageLink': new FormControl(imgLink, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': recipeingredients
    });
  }

  onSubmit() {

  }

}
