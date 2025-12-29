import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { RecipeModel } from '../../models/recipe.model.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);

  // 🔹 State
  readonly recipes = signal<RecipeModel[]>([]);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  loadRecipes(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<RecipeModel[]>(environment.recipeOverviewUrl).subscribe({
      next: (data) => {
        this.recipes.set(data);
        this.loading.set(false);
        console.log('Recipes loaded:', data);
      },
      error: () => {
        this.error.set('Failed to load recipes');
        this.loading.set(false);
      },
    });
  }
}
