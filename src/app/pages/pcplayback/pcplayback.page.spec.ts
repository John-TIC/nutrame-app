import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PcplaybackPage } from './pcplayback.page';

describe('PcplaybackPage', () => {
  let component: PcplaybackPage;
  let fixture: ComponentFixture<PcplaybackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PcplaybackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
