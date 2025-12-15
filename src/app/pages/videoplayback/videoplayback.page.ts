import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videoplayback',
  templateUrl: './videoplayback.page.html',
  styleUrls: ['./videoplayback.page.scss'],
  standalone: false,
})
export class VideoplaybackPage implements OnInit {
  videoId: string = '';
  videoT: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
   ) {

    this.route.queryParams.subscribe(params => {
      if (params && params['special']) {
        this.videoId = JSON.parse(params['special']);
        this.videoT = JSON.parse(params['specialA']);
      }
    });
   }

  ngOnInit() {
    if (this.videoId) {
      console.log('Video ID:', this.videoId);
      console.log('Video Title', this.videoT)
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
