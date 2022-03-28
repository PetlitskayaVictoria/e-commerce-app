import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from '../components/header/cart/store/cart.reducer';

export interface AppState {
  cart: fromCart.CartState;
}

export const appReducer: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
};
