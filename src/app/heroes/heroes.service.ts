/**
 * Created by huangjun on 2017/10/18.
 */
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export class Hero {
  constructor (public id: number, public name: string) { }
}

const HEROES: Hero[]= [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan'),
  new Hero(17, 'Dynama'),
  new Hero(18, 'Dr IQ'),
  new Hero(19, 'Magma'),
  new Hero(20, 'Tornado')
];

@Injectable()
export class HeroesService {
  getHeroes (): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero (id: number | string): Promise<Hero>{
    return this.getHeroes().then(heroes=> heroes.find(hero=> hero.id === +id));
  }

  createHero (name: string): Promise<Hero[]> {
    let id:number = HEROES[HEROES.length-1].id;
    id++;
    HEROES.push(new Hero(id, name));
    return Promise.resolve(HEROES);
  }
}
