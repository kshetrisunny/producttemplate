import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public counter: number = 1;

  constructor() { }

  ngOnInit() {
  }

  dec() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  inc() {
    this.counter +=1;
  }
}


