import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pcplayback',
  templateUrl: './pcplayback.page.html',
  styleUrls: ['./pcplayback.page.scss'],
  standalone: false,
})
export class PcplaybackPage implements OnInit {
  pcId: string = '';
  pcT: string = '';

  constructor(private router: Router, private route: ActivatedRoute,) {
    this.route.queryParams.subscribe(params => {
      if (params && params['special']) {
        this.pcId = JSON.parse(params['special']);
        this.pcT = JSON.parse(params['specialA']);
      }
    });
  }

  ngOnInit() {
    if (this.pcId) {
      console.log('Video ID:', this.pcId);
      console.log('Video Title', this.pcT)
    } else {
      // Navigate back to home if no data available
      this.router.navigate(['/loader']);
    }
  }

  returnVideos() {
    this.router.navigate(['/videos']);
  }

  returnLogin() {
    this.router.navigate(['/loader']);
  }
}
