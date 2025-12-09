import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEdit } from './list-edit';

describe('ListEdit', () => {
  let component: ListEdit;
  let fixture: ComponentFixture<ListEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
