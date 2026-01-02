import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model.model';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetail {
  @Input({ required: true }) recipeDetail!: RecipeModel;

  ngOnInit() {
    console.log('recipeDetail', this.recipeDetail);
    
  }
}
