export interface ProductDetails {
  id: number;
  name: string;
  companyName: string;
  description: string;
  price: number;
  currency: string;
  discount: number;
  itemsAmount?: number;
  mainImgThumbnail?: string;
}

export interface ProductImage {
  id: number;
  imageUrl: string;
  thumbnailUrl: string;
}
