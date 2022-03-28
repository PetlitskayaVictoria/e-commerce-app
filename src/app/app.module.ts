import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AvatarComponent } from './components/header/avatar/avatar.component';
import { CartComponent } from './components/header/cart/cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { ProductImagesCarouselComponent } from './components/product-details-page/product-images-carousel/product-images-carousel.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselOverlayComponent } from './components/product-details-page/carousel-overlay/carousel-overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    CartComponent,
    AvatarComponent,
    ProductDetailsPageComponent,
    ProductImagesCarouselComponent,
    CarouselOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    StoreModule.forRoot(fromApp.appReducer),
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProductImagesCarouselComponent],
})
export class AppModule {}
