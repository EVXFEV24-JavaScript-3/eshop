import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductCartComponent } from './components/product-cart/product-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShopComponent,
    ProductListItemComponent,
    ProductPageComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
