import { NgModule } from '@angular/core';

// import { ThemeModule } from '../../@theme/theme.module';

import { ShopRoutingModule, routedComponentsShop } from './shop-routing.module';

@NgModule({
    imports: [
        // ThemeModule,
        ShopRoutingModule,
    ],
    declarations: [
        ...routedComponentsShop,
    ],
})
export class ShopModule { }
