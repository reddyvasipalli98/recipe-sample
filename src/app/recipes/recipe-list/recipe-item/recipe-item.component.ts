import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  providers: [RecipeService]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipService.recipeSelected.emit(this.recipe);
  }


}
