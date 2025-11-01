import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  standalone: false,
})
export class LoaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  gotoInicio() {
    // this.router.navigate(['/carousel']);
  }

}
