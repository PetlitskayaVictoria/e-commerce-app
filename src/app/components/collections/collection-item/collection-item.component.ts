import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CollectionDetails } from '../store/collections.reducer';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css'],
})
export class CollectionItemComponent implements OnInit {
  collection: CollectionDetails;
  editIsAllowed: number;
  collectionId: number;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.collectionId = +this.route.snapshot.params['id'];
    this.store.select('collections').subscribe((data) => {
      this.collection = data.collections.find((collection) => {
        return collection.id === this.collectionId;
      });
    });

    this.route.params.subscribe((params: Params) => {
      this.collectionId = params['id'];
    });

    //this.editIsAllowed = +this.route.snapshot.queryParams['allowEdit'];
    this.route.queryParams.subscribe((queryParams) => {
      this.editIsAllowed = queryParams['allowEdit'];
    });
  }
}
