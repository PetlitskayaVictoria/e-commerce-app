import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'cart',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-cart.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'minus',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-minus.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'plus',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-plus.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-delete.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'close',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-close.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'next',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-next.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'previous',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/icon-previous.svg'
      )
    );
  }
}
