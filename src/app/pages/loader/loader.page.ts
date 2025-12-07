import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: false,
})
export class LoaderPage implements OnInit {

  isLoading: boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Hide after 3 seconds

  }
  gotoCarousel() {
    this.router.navigate(['/carousel']);
  }

}
