import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarouselOverlayComponent } from '../carousel-overlay/carousel-overlay.component';
import { ProductImage } from '../product-details.model';

@Component({
  selector: 'app-product-images-carousel',
  templateUrl: './product-images-carousel.component.html',
  styleUrls: ['./product-images-carousel.component.css'],
})
export class ProductImagesCarouselComponent implements OnInit {
  @Input() images: ProductImage[];
  @Input() currentImage: ProductImage;
  @Input() isMainPage?: boolean;
  @Input() currentImageIndex?: number = 0;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  setMainImage(id: number, index: number) {
    const mainImage = this.images.find((image) => image.id === id);
    this.currentImage = mainImage;
    this.currentImageIndex = index;
  }

  onMainImageClick() {
    if (this.isMainPage) {
      this.dialog.open(CarouselOverlayComponent, {
        data: {
          images: this.images,
          currentImage: this.currentImage,
          currentImageIndex: this.currentImageIndex,
        },
      });
    }
  }

  onNext() {
    if (this.currentImageIndex + 1 === this.images.length) {
      this.setMainImage(this.images[0].id, 0);
    } else {
      this.setMainImage(
        this.images[this.currentImageIndex + 1].id,
        this.currentImageIndex + 1
      );
    }
  }

  onPrevious() {
    if (this.currentImageIndex === 0) {
      this.setMainImage(
        this.images[this.images.length - 1].id,
        this.images.length - 1
      );
    } else {
      this.setMainImage(
        this.images[this.currentImageIndex - 1].id,
        this.currentImageIndex - 1
      );
    }
  }
}
