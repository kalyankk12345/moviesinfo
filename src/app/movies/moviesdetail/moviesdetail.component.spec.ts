import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesdetailComponent } from './moviesdetail.component';

describe('MoviesdetailComponent', () => {
  let component: MoviesdetailComponent;
  let fixture: ComponentFixture<MoviesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
