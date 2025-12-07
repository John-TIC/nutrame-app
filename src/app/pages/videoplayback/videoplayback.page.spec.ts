import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoplaybackPage } from './videoplayback.page';

describe('VideoplaybackPage', () => {
  let component: VideoplaybackPage;
  let fixture: ComponentFixture<VideoplaybackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoplaybackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
