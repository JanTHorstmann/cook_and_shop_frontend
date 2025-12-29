import { Component, inject } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RecipeOverview } from '../recipes/recipe-overview/recipe-overview';
import { RecipeService } from '../../shared/services/cookbook/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    CommonModule,
    RecipeOverview,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  private recipeService = inject(RecipeService);
  
  recipes = this.recipeService.recipes;
  loading = this.recipeService.loading;
  error = this.recipeService.error;

  ngOnInit() {
    this.recipeService.loadRecipes();
  }
}
