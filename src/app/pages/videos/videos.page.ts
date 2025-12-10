import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { of, Observable } from 'rxjs';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
  standalone: false,
})
export class VideosPage implements OnInit {

  private mockVideos: Video[] = [
    {
      id: '1', title: 'Dietas Hospitalarias - 1', thumbnailUrl: '../assets/images/Dietas_B.jpg', videoUrl: 'mSC5hXZISvw', description: 'Dietas x Consistencia.', views: 1000, likes: 100
    },
    {
      id: '2', title: 'Dietas Hospitalarias - 2', thumbnailUrl: '../assets/images/Dietas_2.jpg', videoUrl: 'hXzVy2HSfi8', description: 'Dietas x Composición.', views: 800, likes: 80
    },
    {
      id: '3', title: 'Dietoterapia-Derivación', thumbnailUrl: '../assets/images/Dietas_C.jpg', videoUrl: 'DooLuqs4HqE', description: 'Ejercício Derivación.', views: 1500, likes: 120
    },
  ];

  videos: Video[] = [];

  constructor(private router: Router, ) {}

  ngOnInit() {
    this.getVideos().subscribe(videos => {
    this.videos = videos;
    });
  }

  returnCarousel() {
    this.router.navigate(['/carousel']);
  }

  returnLogin() {
    this.router.navigate(['/loader']);
  }

  gotoVideoPB() {
    this.router.navigate(['/videoplayback']);
  }

  goToDetailsPage(videoId: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(videoId)
      }
    };
    this.router.navigate(['/videoplayback'], navigationExtras);
  }

  getVideos(): Observable<Video[]> {
    return of(this.mockVideos);
  }


}
