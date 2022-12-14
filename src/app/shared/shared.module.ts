import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { UahCurrencyPipe } from '@shared/pipes/uah-currency.pipe';
import { PriceColorDirective } from '@shared/directives/price-color.directive';
import { FooterComponent } from '@core/footer/footer.component';
import { HeaderComponent } from '@core/header/header.component';
import { CartTooltipComponent } from '@shared/components/cart-tooltip/cart-tooltip.component';
import { RouterLink } from '@angular/router';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { CartComponent } from '@pages/cart/cart.component';
import { ProductCardComponent } from '@shared/components/product-card/product-card.component';
import { ProductComponent } from '@pages/product/product.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProductsService } from '@pages/products/products.service';
import { ProductsComponent } from '@pages/products/products.component';


@NgModule({
  declarations: [
    UahCurrencyPipe,
    PriceColorDirective,

    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
    AdminSidebarComponent,
    AdminTableComponent,
    NotFoundComponent,
    CartComponent,
    ProductCardComponent,
    ProductComponent,
    HomeComponent,
    ProductsComponent,
  ],
  providers: [ProductsService],
  imports: [CommonModule, RouterLink],
  exports: [
    UahCurrencyPipe,
    PriceColorDirective,
    FooterComponent,
    HeaderComponent,
    CartTooltipComponent,
    AdminSidebarComponent,
    AdminTableComponent,
    NotFoundComponent,
    CartComponent,
    ProductCardComponent,
    ProductComponent,
    HomeComponent,
    ProductsComponent,
  ],

})
export class SharedModule {}
