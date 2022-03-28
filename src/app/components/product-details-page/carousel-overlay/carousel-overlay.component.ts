import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductImage } from '../product-details.model';

@Component({
  selector: 'app-carousel-overlay',
  templateUrl: './carousel-overlay.component.html',
  styleUrls: ['./carousel-overlay.component.css'],
})
export class CarouselOverlayComponent implements OnInit {
  images: ProductImage[];
  currentImage: ProductImage;
  currentImageIndex: number;

  constructor(
    private dialogRef: MatDialogRef<CarouselOverlayComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      images: ProductImage[];
      currentImage: ProductImage;
      currentImageIndex: number;
    }
  ) {
    this.images = data.images;
    this.currentImage = data.currentImage;
    this.currentImageIndex = data.currentImageIndex;
  }

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
