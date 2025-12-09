import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeOverview } from './recipe-overview';

describe('RecipeOverview', () => {
  let component: RecipeOverview;
  let fixture: ComponentFixture<RecipeOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
