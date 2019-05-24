import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CheckoutComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.keyboard = false;
    config.wrap = true;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
