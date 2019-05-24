import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SectionComponent } from './pages/section/section.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BidsComponent } from './pages/bids/bids.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BargainComponent } from './pages/bargain/bargain.component';

const routes: Routes = [
  // { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {path: '' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'shop' , component: ShopComponent},
  {path: 'productdetail' , component: ProductdetailComponent},
  {path: 'cart' , component: CartComponent},
  {path: 'checkout' , component: CheckoutComponent},
  {path: 'section' , component: SectionComponent},
  {path: 'footer' , component: FooterComponent},
  {path: 'bids', component: BidsComponent},
  {path: 'bargain', component: BargainComponent},



  {path: '' ,redirectTo:'/home',  pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
