import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FileSelectDirective } from 'ng2-file-upload';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { Siderbar } from './pages/sidebar/siderbar.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionComponent } from './pages/section/section.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BidsComponent } from './pages/bids/bids.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BargainComponent } from './pages/bargain/bargain.component';
import { ThemepickerComponent } from './pages/themepicker/themepicker.component';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    ProductdetailComponent,
    CartComponent,
    CheckoutComponent,
    SidebarComponent,
    Siderbar,
    SectionComponent,
    FooterComponent,
    BidsComponent,
    LoginComponent,
    RegisterComponent,
    BargainComponent,
    ThemepickerComponent,
    FilterPipe,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
