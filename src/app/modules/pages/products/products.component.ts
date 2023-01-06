import { Component, OnInit } from '@angular/core';
import { IProduct } from '@interfaces/product.interface';
import { ProductsService } from './products.service';
import { CartService } from '@pages/cart/cart.service';

import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})

export class ProductsComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  public loader$!: Subject<boolean>;

  private subscription!: Subscription;


  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productsService.getFromStorage(8);
    this.cartService.getFromStorage();
    this.loader$ = this.productsService.loader;


    this.subscription = this.productsService.products$.subscribe(
      (products) => (this.products = products)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
