import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},   // LAZY LOAD
  {path: 'shoppingList', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signip', component: SigninComponent},

  // { path: '**', component: PageNotFoundComponent},
];

@NgModule ({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
