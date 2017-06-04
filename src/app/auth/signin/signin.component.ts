import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {RecipeService} from '../../shared/recipeService.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email: string;
  formatedEmail: string;

  constructor(private authService: AuthService,
              private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    this.email = form.value.email;
    this.formatedEmail = this.email.replace('.', '');
    this.recipeService.email = this.formatedEmail;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    setTimeout(() => {
      this.recipeService.getRecipesFromServer();
    }, 500);
   // this.recipeService.getRecipesFromServer();
  }
}
