import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themepicker',
  templateUrl: './themepicker.component.html',
  styleUrls: ['./themepicker.component.scss']
})
export class ThemepickerComponent implements OnInit {

  private themeWrapper = document.querySelector('body');

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.global(form.value);
  }

  global(stylesheet) {
    if(stylesheet.globalFooterColor) {
      this.themeWrapper.style.setProperty('--footerColor',stylesheet.globalFooterColor);
    }
  }



}
