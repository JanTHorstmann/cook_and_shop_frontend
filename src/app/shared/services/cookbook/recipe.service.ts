import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../../environments/environment'
import { RecipeModel } from '../../models/recipe.model.model';


export type RecipeCategory = 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'all';
export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);

  readonly recipes = signal<RecipeModel[]>([]);
  readonly recipeDetail = signal<RecipeModel | null>(null);
  readonly error = signal<string | null>(null);
  readonly loading = signal(false);
  readonly showDetail = signal(false);

  readonly selectedCategory = signal<RecipeCategory>('all');
  readonly selectedDifficulty = signal<Difficulty>('all');
  readonly maxPreparationTime = signal<number | null>(null);

  readonly filteredRecipes = computed(() => {
    return this.recipes().filter(recipe => {

      // Kategorie
      if (
        this.selectedCategory() !== 'all' &&
        recipe.category !== this.selectedCategory()
      ) {
        return false;
      }

      // Schwierigkeit
      if (
        this.selectedDifficulty() !== 'all' &&
        recipe.difficulty !== this.selectedDifficulty()
      ) {
        return false;
      }

      // Zeit
      if (
        this.maxPreparationTime() !== null &&
        recipe.preparation_time > this.maxPreparationTime()!
      ) {
        return false;
      }

      return true;
    });
  });

  readonly groupedRecipes = computed(() => {
    const groups: Record<string, RecipeModel[]> = {
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: [],
    };

    for (const recipe of this.filteredRecipes()) {
      groups[recipe.category].push(recipe);
    }

    return groups;
  });

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

  showRecipeDetail(recipe: RecipeModel) {
    console.log('RecipeDetail', recipe);
    this.recipeDetail.set(null);
    this.recipeDetail.set(recipe);
    this.showDetail.set(true);
  }

  closeRecipeDetail() {
    this.recipeDetail.set(null);
    this.showDetail.set(false);
  }
}
