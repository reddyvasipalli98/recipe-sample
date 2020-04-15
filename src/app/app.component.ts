import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-sample';
  featureRecipe = 'Recipe';

  OnNavigateClick(eventData: string) {
    this.featureRecipe = eventData;
    }
  }
