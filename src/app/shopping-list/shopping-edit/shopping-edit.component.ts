import {Component, ElementRef, OnInit, ViewChild, EventEmitter} from '@angular/core';
import {Ingridient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shared/shoppingListService.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() ingredient = new EventEmitter<{name: string, amount: number}>(); the same like bottom
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;


  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingridient(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }

  // onAddIngredient() {
  //   this.ingredient.emit({
  //     name: this.nameInput.nativeElement.value,
  //     amount: this.amountInput.nativeElement.value
  //   });
  // }

  // onAddIngredient(nameInput: HTMLInputElement) {
  //   this.serverCreated.emit({
  //     serverName: nameInput.value,
  //     serverContent: this.serverContentInput.nativeElement.value
  //   });
  // }

}
