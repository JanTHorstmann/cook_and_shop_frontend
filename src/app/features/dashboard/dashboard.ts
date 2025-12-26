import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RecipeOverview } from '../recipes/recipe-overview/recipe-overview';

@Component({
  selector: 'app-dashboard',
  imports: [
    Navbar,
    RecipeOverview,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

  ngOnInit() {
    console.log('start');
    
  }

}
