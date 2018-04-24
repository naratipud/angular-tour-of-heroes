import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { environment } from '../../environments/environment';

@Injectable()
export class HeroService {
  private heroesUrl = '/heroes';
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(`${environment.api_url}${this.heroesUrl}`)
      .toPromise()
      .then((resp: Response) => {
        console.log(resp);
        return resp.json().data as Hero[];
      });
    // .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${environment.api_url}${this.heroesUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json().data as Hero);
    // .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(
        `${environment.api_url}${this.heroesUrl}`,
        JSON.stringify({ name: name }),
        { headers: this.headers }
      )
      .toPromise()
      .then(resp => resp.json().data as Hero);
    // .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${environment.api_url}${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero);
    // .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${environment.api_url}${this.heroesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null);
    // .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error('An error occurred', error); // for demo purposes only
    console.log(
      `Error status: [ ${error.status} ] / status text: [ ${error.statusText} ]`
    );
    // return Promise.reject(error.message || error);
    return Promise.reject<string>(error.json().error || 'Server error');
  }
}
