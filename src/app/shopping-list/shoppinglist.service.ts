import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Eggs', 36)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }
      onIngAdded(eventData: Ingredient) {
        this.ingredients.push(eventData);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
