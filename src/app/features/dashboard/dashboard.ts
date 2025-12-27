import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RecipeOverview } from '../recipes/recipe-overview/recipe-overview';
import { RecipeService } from '../../shared/services/cookbook/recipe';
import { RecipeModel } from '../../shared/models/recipe.model.model';
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

  recipeOverviewData: any = [];
  loading = false;
  error: string | null = null;

  constructor(
    private recipeOverviewService: RecipeService
  ) { }


  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.loading = true;

    this.recipeOverviewService.getRecipeOverview().subscribe({
      next: (data) => {
        this.recipeOverviewData = data;
        this.loading = false;
        console.log("Recipes:", this.recipeOverviewData);
        
      },
      error: () => {
        this.error = 'Failed to load recipes';
        this.loading = false;
      }
    });
  }

}
