import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceElementsFactory,
  EntityCollectionServiceBase
} from '@ngrx/data';
import { Cat } from '../dto/cat';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService extends EntityCollectionServiceBase<Cat> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Cat', serviceElementsFactory);
  }

  /* getAll(): Observable<Cat[]> {
    return super.getAll().pipe(
      map(({ results }: any) => {
        console.log('results', results);
        return results;
      })
    );
  } */
}
