import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from '../components/header/cart/store/cart.reducer';
import * as fromCollections from '../components/collections/store/collections.reducer';

export interface AppState {
  cart: fromCart.CartState;
  collections: fromCollections.CollectionsState
}

export const appReducer: ActionReducerMap<AppState> = {
  cart: fromCart.cartReducer,
  collections: fromCollections.collectionsReducer
};
