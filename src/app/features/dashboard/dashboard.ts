import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RecipeOverview } from '../recipes/recipe-overview/recipe-overview';
import { RecipeService } from '../../shared/services/cookbook/recipe.service';
import { CommonModule } from '@angular/common';
import { RecipeDetail } from '../recipes/recipe-detail/recipe-detail';
import { RecipeModel } from '../../shared/models/recipe.model.model';
import { Filterbar } from '../../shared/components/filterbar/filterbar';

@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    CommonModule,
    RecipeOverview,
    RecipeDetail,
    Filterbar,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  public recipeService = inject(RecipeService);

  groupedRecipes = this.recipeService.groupedRecipes;
  loading = this.recipeService.loading;
  error = this.recipeService.error;
  showDetail = this.recipeService.showDetail;
  recipeDetail = this.recipeService.recipeDetail;

  ngOnInit() {
    this.recipeService.loadRecipes();
  }

  filterBreakfast() {
    this.recipeService.selectedCategory.set('breakfast');
  }

  filterAll() {
    this.recipeService.selectedCategory.set('all');
  }

  showRecipeDetail(recipe: RecipeModel) {
    this.recipeService.showRecipeDetail(recipe)
  }

  closeRecipeDetail() {
    this.recipeService.closeRecipeDetail();
  }
}
