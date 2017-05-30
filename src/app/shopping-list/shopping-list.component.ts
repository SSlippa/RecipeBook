import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingridient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppingListService.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingridient[];
  private subscription: Subscription;

  constructor(private shoopingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoopingListService.getIngredients();
    this.subscription = this.shoopingListService.ingredientsChanged.subscribe(
      (ingredients: Ingridient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
