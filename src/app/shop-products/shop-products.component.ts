import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from './../entity/product';
import { addProduct } from './../cart-state-store/cart.actions';

export const PRODUCTS = [
  {
    id: 1,
    name: 'Iphone 11 64GB Black',
    condition: 'Good',
    price: 389.99,
    image: 'assets/iphone11.jpeg',
  },
  {
    id: 2,
    name: 'Sony Playstation 4 500GB incl. wireless controller',
    condition: 'Very Good',
    price: 264.99,
    image: 'assets/sonyplaystation.jpeg',
  },
  {
    id: 3,
    name: 'Samsung A320F Galaxy A3 (2017) 16GB',
    condition: 'Like New',
    price: 121.99,
    image: 'assets/samsunga3.jpeg',
  },
  {
    id: 4,
    name: 'Apple iPad Air 4 10.9" 64GB',
    condition: 'Very Good',
    price: 522.99,
    image: 'assets/ipadair.jpeg',
  },
  {
    id: 5,
    name: 'Sony Alpha 6000 body black',
    condition: 'Heavily Used',
    price: 338.99,
    image: 'assets/sony6000.jpeg',
  },
];

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss'],
})
export class ShopProductsComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  public products(): Product[] {
    return PRODUCTS;
  }

  public buyProduct(product: Product) {
    this.store.dispatch(addProduct(product));
  }
}
