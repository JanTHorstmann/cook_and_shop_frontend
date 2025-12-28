import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { RecipeModel } from '../../models/recipe.model.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(
    private http: HttpClient,
  ) { }

  getRecipeOverview() {
    return this.http.get<RecipeModel>(environment.recipeOverviewUrl);
  }
}
