import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/cookbook/recipe.service';

@Component({
  selector: 'app-filterbar',
  imports: [],
  templateUrl: './filterbar.html',
  styleUrl: './filterbar.scss',
})
export class Filterbar {

  public recipeService = inject(RecipeService);

  selectCategory(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.recipeService.setCategory(value);
  }

  selectDifficulty(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.recipeService.setDifficult(value);
  }

  selectPreparationTime(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.recipeService.setPreparationTime(value)
  }
}
