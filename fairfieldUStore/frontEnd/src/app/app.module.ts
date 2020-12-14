import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './store/products/products.component';
import { OrdersComponent } from './store/orders/orders.component';
import { ShoppingCartComponent } from './store/shopping-cart/shopping-cart.component';
import {StoreService} from './store/services/StoreService';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
