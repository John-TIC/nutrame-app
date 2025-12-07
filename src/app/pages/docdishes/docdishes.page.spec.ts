import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocdishesPage } from './docdishes.page';

describe('DocdishesPage', () => {
  let component: DocdishesPage;
  let fixture: ComponentFixture<DocdishesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocdishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
