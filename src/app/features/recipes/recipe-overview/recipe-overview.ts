import { Component, Input, input } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model.model';

@Component({
  selector: 'app-recipe-overview',
  imports: [],
  templateUrl: './recipe-overview.html',
  styleUrl: './recipe-overview.scss',
})
export class RecipeOverview {
  @Input() recipe!: RecipeModel;

}
