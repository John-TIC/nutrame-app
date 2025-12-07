import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      id: '1', title: 'Dietas Hospitalarias - 1', thumbnailUrl: '../assets/images/Dietas_1.jpg', videoUrl: 'video1.mp4', description: 'Dietas x Consistencia.', views: 1000, likes: 100
    },
    {
      id: '2', title: 'Dietas Hospitalarias - 2', thumbnailUrl: '../assets/images/Dietas_2.jpg', videoUrl: 'video2.mp4', description: 'Dietas x Composición.', views: 800, likes: 80
    },
    {
      id: '3', title: 'Dietoterapia-Derivación', thumbnailUrl: 'https://via.placeholder.com/320x180', videoUrl: 'video3.mp4', description: 'Ejercício Derivación.', views: 1500, likes: 120
    },
  ];

  videos: Video[] = [];
  public currentUrl: string = '';

  constructor(private router: Router,
   ) {}

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

  gotoVideoPB(currentUrl:string) {
    console.log(currentUrl);
    this.router.navigate(['/videoplayback']);
  }

  getVideos(): Observable<Video[]> {
    return of(this.mockVideos);
  }


}
