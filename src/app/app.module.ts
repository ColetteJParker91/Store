import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { HeaderComponent } from './header/header.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { StoreModule } from '@ngrx/store';
import {
  cartReducer,
  metaReducerLocalStorage,
} from './cart-state-store/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ShopProductsComponent,
    HeaderComponent,
    ShopCartComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      { cartEntries: cartReducer },
      { metaReducers: [metaReducerLocalStorage] }
    ),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
