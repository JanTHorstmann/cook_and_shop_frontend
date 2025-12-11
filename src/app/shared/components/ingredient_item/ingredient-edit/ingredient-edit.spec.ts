import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientEdit } from './ingredient-edit';

describe('IngredientEdit', () => {
  let component: IngredientEdit;
  let fixture: ComponentFixture<IngredientEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
