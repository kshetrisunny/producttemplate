import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';



const routes: Routes = [{
    path: '',
    component: ShopComponent,
    children: [
        {
            path: 'categories',
            component: CategoriesComponent,
        },
        {
            path: 'brands',
            component: BrandsComponent,
        },
        
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShopRoutingModule { }

export const routedComponentsShop = [
    ShopComponent,
    CategoriesComponent,
    BrandsComponent
];