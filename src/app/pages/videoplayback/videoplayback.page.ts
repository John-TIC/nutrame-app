import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoplayback',
  templateUrl: './videoplayback.page.html',
  styleUrls: ['./videoplayback.page.scss'],
  standalone: false,
})
export class VideoplaybackPage implements OnInit {

  constructor(private router: Router,
   ) {}

  ngOnInit() {
  }

  returnVideos() {
    this.router.navigate(['/videos']);
  }

  returnLogin() {
    this.router.navigate(['/loader']);
  }

}
