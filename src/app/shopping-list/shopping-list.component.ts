import { Component, OnInit } from '@angular/core';
import {Ingridient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shared/shoppingListService.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingridient[];
  constructor(private shoopingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoopingListService.getIngredients();
    this.shoopingListService.ingredientsChanged.subscribe(
      (ingredients: Ingridient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
