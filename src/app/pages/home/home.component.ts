import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isSwitcherShown = false;

  isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
  images: any [];

  @Output() collapsedEvent = new EventEmitter<boolean>();


  constructor(public router: Router) {
    this.images = [
      {'img': '../../../assets/1.jpg'},
      {'img': '../../../assets/2.jpg'},
      {'img': '../../../assets/3.jpg'},
      {'img': '../../../assets/4.jpg'},
      {'img': '../../../assets/5.jpg'},
      {'img': '../../../assets/6.jpg'},
      {'img': '../../../assets/7.jpg'},
      {'img': '../../../assets/8.jpg'},
      {'img': '../../../assets/9.jpg'},
    ];
    this.router.events.subscribe(val => {
      if (
          val instanceof NavigationEnd &&
          window.innerWidth <= 992 &&
          this.isToggled()
      ) {
          this.toggleSidebar();
      }
  });
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

toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
}

isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
}

toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
}


onLoggedout() {
    localStorage.removeItem('isLoggedin');
}

toggleThemeSwitcher() {
  this.isSwitcherShown = !this.isSwitcherShown;
}


}
