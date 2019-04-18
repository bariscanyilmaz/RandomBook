import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbookDialogComponent } from './addbook-dialog.component';

describe('AddbookDialogComponent', () => {
  let component: AddbookDialogComponent;
  let fixture: ComponentFixture<AddbookDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbookDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
