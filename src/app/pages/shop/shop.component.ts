import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(public router: Router) {
    
   }

  ngOnInit() {
    this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';

 }

 eventCalled() {
  this.isActive = !this.isActive;
}

addExpandClass(element: any) {
  if (element === this.showMenu) {
      this.showMenu = '0';
  } else {
      this.showMenu = element;
  }
}

}
