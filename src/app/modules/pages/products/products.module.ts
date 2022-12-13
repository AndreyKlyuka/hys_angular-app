import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { UahCurrencyPipe } from '@pipes/uah-currency.pipe';
import { PriceColorDirective } from '@shared/directives/price-color.directive';
import { ProductsService } from '@pages/products/products.service';

@NgModule({
  declarations: [UahCurrencyPipe, PriceColorDirective],
  imports: [CommonModule, ProductsRoutingModule],
  providers: [ProductsService],
  exports: [UahCurrencyPipe, PriceColorDirective],
})
export class ProductsModule {}
