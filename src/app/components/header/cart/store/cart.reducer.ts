import { ProductDetails } from 'src/app/components/product-details-page/product-details.model';
import * as CartActions from './cart.actions';

export interface CartState {
  products: ProductDetails[];
  productsAmount: number;
  totalItemsAmount: number;
}

const initState = {
  // products: [],
  products: [
    {
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
      itemsAmount: 3,
    },
    {
      id: 2,
      name: 'Product 2',
      companyName: 'company 2',
      description: 'Description 2',
      price: 300,
      currency: 'USD',
      discount: 20,
      mainImgThumbnail:
        'assets/images/product-images/image-product-3-thumbnail.jpg',
      itemsAmount: 2,
    },
  ],
  productsAmount: 2,
  totalItemsAmount: 5,
};

export function cartReducer(
  state: CartState = initState,
  action: CartActions.CartActions
) {
  switch (action.type) {
    case CartActions.ADD_PRODUCT: {
      return {
        ...state,
        products: [action.payload, ...state.products],
        productsAmount: state.productsAmount + 1,
        totalItemsAmount: state.totalItemsAmount + action.payload.itemsAmount,
      };
    }
    case CartActions.REMOVE_FROM_CART: {
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload.id),
        productsAmount: state.productsAmount - 1,
        totalItemsAmount: state.totalItemsAmount - action.payload.itemsAmount,
      };
    }

    default:
      return state;
  }
}
