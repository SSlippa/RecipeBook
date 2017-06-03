import {Ingridient} from '../shared/ingredient.model';
export class Recipe {
  public name: string;
  public descriptions: string;
  public imagePath: string;
  public ingredients: Ingridient[];


  constructor (name: string, desc: string, imagePath: string, ingredients: Ingridient[]) {
  this.name = name;
  this.descriptions = desc;
  this.imagePath = imagePath;
  this.ingredients = ingredients;
 }
}
