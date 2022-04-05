import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { ProductDetails } from '../../product-details-page/product-details.model';
import * as CartActions from './store/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: ProductDetails[];
  productsAmount: number;
  itemsAmount: number = 0;
  showCartPreview = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscription = this.store.select('cart').subscribe((data) => {
      this.products = data.products;
      this.productsAmount = data.productsAmount;
      this.itemsAmount = data.totalItemsAmount;
    });
  }

  ngOnInit(): void {}

  @HostListener('document:click', ['$event']) clickOutsidePreview() {
    this.showCartPreview = false;
  }
  toggleCartPreview(event: Event) {
    this.showCartPreview = !this.showCartPreview;
    event.stopPropagation();
  }

  onCartClick(event: Event) {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  priceWithDiscount(id: number): number {
    const product = this.products.find((p) => p.id === id);
    if (product.discount) {
      return product.price - (product.price * product.discount) / 100;
    } else {
      return product.price;
    }
  }

  getFullPrice(id: number): number {
    const product = this.products.find((p) => p.id === id);
    if (product.itemsAmount > 0) {
      return this.priceWithDiscount(product.id) * product.itemsAmount;
    }
  }

  onRemoveProduct(id: number, itemsAmount: number) {
    this.store.dispatch(new CartActions.RemoveFromCart({ id, itemsAmount }));
  }

  onCheckout() {
    console.log(this.route);
    this.showCartPreview = false;
    this.router.navigate(['/cart']);
  }
}
