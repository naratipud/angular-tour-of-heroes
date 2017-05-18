import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Hero } from '../shared/hero';

@Injectable()
export class HeroSearchService {

  constructor(
    private http: Http
  ) { }

  search(term: string): Observable<Hero[]> {
    return this.http.get(`app/heroes/?name=${term}`)
      .map(response => response.json().data as Hero[])
      .catch((error: Response) => {
          console.error('An friendly error occurred', error);
          // return Observable.throw(error.message || error);
          return Observable.throw(error.json().error || error);
      });
  }

}
