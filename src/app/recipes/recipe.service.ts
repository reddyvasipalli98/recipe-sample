import { Recipe } from './recipes.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Recipe', 'A very new recipe',
             'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
             [
                 new Ingredient('Meat', 1),
                 new Ingredient('French Fries', 20)
             ]),
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Recipe New', 'A very old bulsshit',
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Patty', 1)
            ])
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}
