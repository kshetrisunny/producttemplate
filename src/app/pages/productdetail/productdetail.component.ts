import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
  providers: [NgbCarouselConfig]
})
export class ProductdetailComponent implements OnInit {

  sliderImage: any [];

  constructor(config: NgbCarouselConfig) { 
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.sliderImage = [
    {'img': '../../../assets/s.png', 'alt': '' },
    {'img': '../../../assets/s2.png', 'alt': '' },
    {'img': '../../../assets/s4.jpg', 'alt': '' },
    {'img': '../../../assets/s3.jpg', 'alt': '' },
    {'img': '../../../assets/s1.jpg', 'alt': '' },
    ];

    
  }
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  ngOnInit() {
  }

}
