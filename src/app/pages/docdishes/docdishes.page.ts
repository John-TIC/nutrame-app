import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docdishes',
  templateUrl: './docdishes.page.html',
  styleUrls: ['./docdishes.page.scss'],
  standalone: false,
})
export class DocdishesPage implements OnInit {
  open01: boolean = false;
  open02: boolean = false;
  open03: boolean = false;
  open04: boolean = false;
  open05: boolean = false;
  open06: boolean = false;
  open07: boolean = false;
  open08: boolean = false;
  open09: boolean = false;
  open10: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

    showDialog1() {
    this.open01 = !this.open01;
  }
  showDialog2() {
    this.open02 = !this.open02;
  }
  showDialog3() {
    this.open03 = !this.open03;
  }
  showDialog4() {
    this.open04 = !this.open04;
  }
  showDialog5() {
    this.open05 = !this.open05;
  }
  showDialog6() {
    this.open06 = !this.open06;
  }
  showDialog7() {
    this.open07 = !this.open07;
  }
  showDialog8() {
    this.open08 = !this.open08;
  }
  showDialog9() {
    this.open09 = !this.open09;
  }
  showDialog10() {
    this.open10 = !this.open10;
  }

  returnDialog() {
    this.open01 = false;
    this.open02 = false;
    this.open03 = false;
    this.open04 = false;
    this.open05 = false;
    this.open06 = false;
    this.open07 = false;
    this.open08 = false;
    this.open09 = false;
    this.open10 = false;
  }

  returnInicio() {
    this.router.navigate(['/carousel']);
  }

  returnLogin() {
    this.router.navigate(['/loader']);
  }

}
