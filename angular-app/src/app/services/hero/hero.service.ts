import { Injectable } from '@angular/core';
import { Hero } from '../../heroModel/hero';

@Injectable()
export class HeroService {

  constructor() { }

  takeAllHeroes() {
    return [
      { Id: 2, Name: 'hero2' },
      { Id: 1, Name: 'hero1' }
    ]
  }

}
