import { Injectable } from '@angular/core';

import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
