import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CollectionItemComponent } from './components/collections/collection-item/collection-item.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenComponent } from './components/men/men.component';
import { ProductDetailsPageComponent } from './components/product-details-page/product-details-page.component';
import { WomenComponent } from './components/women/women.component';

const appRoutes: Routes = [
  { path: '', component: ProductDetailsPageComponent },
  {
    path: 'collections',
    component: CollectionsComponent,
  },
  { path: 'collections/:id', component: CollectionItemComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
