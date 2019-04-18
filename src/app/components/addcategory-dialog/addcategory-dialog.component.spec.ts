import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategoryDialogComponent } from './addcategory-dialog.component';

describe('AddcategoryDialogComponent', () => {
  let component: AddcategoryDialogComponent;
  let fixture: ComponentFixture<AddcategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
