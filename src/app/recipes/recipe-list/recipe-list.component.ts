import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getRecipes();
  }

  onRecipeClick(recipeItem: Recipe) {
    this.recipeSelected.emit(recipeItem);
  }
}
