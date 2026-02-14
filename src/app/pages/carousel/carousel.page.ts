import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
  standalone: false,
})
export class CarouselPage implements OnInit {
    platos = [
    {name: 'Plato-Plantilla',
     image: '../../assets/images/PS_1.jpg',
    },
    {name: 'Cereales y Tubérculos',
     image: '../../assets/images/PS_2.jpg',
    },
    {name: 'Frutas y Verduras',
     image: '../../assets/images/PS_3.jpg',
    },
    {name: 'Lácteos y Derivados',
     image: '../../assets/images/PS_4.jpg',
    },
    {name: 'Proteínas',
     image: '../../assets/images/PS_5.jpg',
    },
    {name: 'Azúcares y Grasas',
     image: '../../assets/images/PS_6.jpg',
    },
    {name: 'Resultado - Plato Saludable',
    image: '../../assets/images/PS_FC.jpg',
   },
  ]

  cantidad_platos: number = 0

  constructor(private router: Router) { }

  ngOnInit() {
    this.cantidad_platos = this.platos.length
  }

  gotoDocDishes() {
    this.router.navigate(['/docdishes']);
  }

  gotoVideos() {
    this.router.navigate(['/videos']);
  }

  gotoPostCasts() {
    this.router.navigate(['/podcast']);
  }
}
