import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ProductDetails, ProductImage } from './product-details.model';
import * as CartActions from './../header/cart/store/cart.actions';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CarouselOverlayComponent } from './carousel-overlay/carousel-overlay.component';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent implements OnInit {
  images: ProductImage[] = [
    {
      id: 1,
      imageUrl: 'assets/images/product-images/image-product-1.jpg',
      thumbnailUrl:
        'assets/images/product-images/image-product-1-thumbnail.jpg',
    },
    {
      id: 2,
      imageUrl: 'assets/images/product-images/image-product-2.jpg',
      thumbnailUrl:
        'assets/images/product-images/image-product-2-thumbnail.jpg',
    },
    {
      id: 3,
      imageUrl: 'assets/images/product-images/image-product-3.jpg',
      thumbnailUrl:
        'assets/images/product-images/image-product-3-thumbnail.jpg',
    },
    {
      id: 4,
      imageUrl: 'assets/images/product-images/image-product-4.jpg',
      thumbnailUrl:
        'assets/images/product-images/image-product-4-thumbnail.jpg',
    },
  ];

  productDetails: ProductDetails = {
    id: 1,
    name: 'Fall limited  edition sneakers',
    companyName: 'sneaker company',
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,they"ll withstand everything the weather can offer.',
    price: 250,
    currency: 'USD',
    discount: 50,
    mainImgThumbnail:
      'assets/images/product-images/image-product-1-thumbnail.jpg',
  };
  itemsNumber: number = 1;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  get priceWithDiscount(): number {
    if (this.productDetails.discount) {
      return (
        this.productDetails.price -
        (this.productDetails.price * this.productDetails.discount) / 100
      );
    } else {
      return this.productDetails.price;
    }
  }

  incItemsNumber() {
    this.itemsNumber = this.itemsNumber + 1;
  }

  decItemsNumber() {
    if (this.itemsNumber > 1) {
      this.itemsNumber = this.itemsNumber - 1;
    }
  }

  setItemsNumber(value: string) {
    this.itemsNumber = +value;
  }

  onAddToCart() {
    const product = { ...this.productDetails, itemsAmount: this.itemsNumber };
    this.store.dispatch(new CartActions.AddToCart(product));
  }
}
