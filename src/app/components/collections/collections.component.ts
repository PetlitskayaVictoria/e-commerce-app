import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { CollectionDetails } from './store/collections.reducer';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  subscription: Subscription;
  collections: CollectionDetails[];
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subscription = this.store.select('collections').subscribe((data) => {
      this.collections = data.collections;
    });
  }

  ngOnInit(): void {}

  openCollection(id: number) {
    // this.router.navigate([id], { relativeTo: this.route });
    this.router.navigate(['/collections', id], {
      queryParams: { allowEdit: '0' },
    });
  }
}
