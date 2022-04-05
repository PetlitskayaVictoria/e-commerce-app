import { Action } from "@ngrx/store";

export interface CollectionDetails {
    id: number;
    name: string;
    description: string
}

export interface CollectionsState {
  collections: CollectionDetails[];
}

const initState: CollectionsState = {
 
  collections: [
    {
      id: 1,
      name: 'Collection 1',
      description: 'Description 1'},
    {
      id: 2,
      name: 'Collection 2',
      description: 'Description 2',
    },
  ]
};

export function collectionsReducer(
  state: CollectionsState = initState,
  action: Action
) {
  switch (action.type) {
    default:
      return state;
  }
}
