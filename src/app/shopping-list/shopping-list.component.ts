import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingridient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppingListService.service';
import {Subscription} from 'rxjs/Subscription';
import {style, state, trigger, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('animatedInOut', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(-100px)',
          opacity: 0,
        }))
      ]),
    ])
    ]
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

  onEditItem(id: number) {
    this.shoopingListService.startedEditing.next(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
