import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Pc } from 'src/app/models/podcast.model';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.page.html',
  styleUrls: ['./podcast.page.scss'],
  standalone: false,
})
export class PodcastPage implements OnInit {
    private mockPcs: Pc[] = [
      {
        id: '1', pctitle: 'Dietas Pediátricas', thumbnailUrl: '../assets/images/Dietas_pediatricas.jpg', pcUrl: 'j6VHqzKqQvs', description: 'Dietas Pediátticas.', views: 1000, likes: 100
      },
      {
        id: '2', pctitle: 'Dietas x Consistencia', thumbnailUrl: '../assets/images/Dietas x Consistencia.jpg', pcUrl: 'iAOTBP69Z8Q', description: 'Dietas x Consistencia.', views: 800, likes: 80
      },
      {
        id: '3', pctitle: 'Dietas x Comosición de Nutrientes', thumbnailUrl: '../assets/images/Dietas_C.jpg', pcUrl: 'Z53IhpXnRf8', description: 'Dietas x Composición de Nutrientes.', views: 1500, likes: 120
      },
      {
        id: '4', pctitle: 'Dietas Hipoalergénicas', thumbnailUrl: '../assets/images/Dieta Hipoalergénica.jpg', pcUrl: 'o1XNeZfk23M', description: 'Dietas Hipoalergénicas.', views: 1500, likes: 120
      },
    ];
  
    podCasts: Pc[] = [];
  

  constructor(private router: Router,) { }

  ngOnInit() {
    this.getPc().subscribe(podCasts => {
    this.podCasts = podCasts;
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


  getPc(): Observable<Pc[]> {
      return of(this.mockPcs);
    }

}
