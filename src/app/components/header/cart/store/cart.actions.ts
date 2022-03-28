import { Action } from '@ngrx/store';
import { ProductDetails } from 'src/app/components/product-details-page/product-details.model';

export const ADD_PRODUCT = '[Cart] Add Product';
export const REMOVE_FROM_CART = '[Cart] Remove From Cart';

export class AddToCart implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: ProductDetails) {}
}

export class RemoveFromCart implements Action {
  readonly type = REMOVE_FROM_CART;

  constructor(public payload: { id: number; itemsAmount: number }) {}
}

export type CartActions = AddToCart | RemoveFromCart;
