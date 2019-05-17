/**
 * Created by huangjun on 2017/10/19.
 */

import 'rxjs/add/operator/switchMap';
import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { animateFlyInOut } from '../animations/animation';

import { Hero, HeroesService } from './heroes.service';
@Component({
  // selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [ animateFlyInOut ]
})

export class HeroListComponent implements OnInit, OnDestroy {
  @HostBinding('@flyInOut') flyInOut = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  heroes: Hero[];
  selectedHero: Hero;
  selectedId: number;
  timer = null;

  constructor (
    private heroService: HeroesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit (): void {
    clearTimeout(this.timer);
    this.selectedId = +this.route.snapshot.paramMap.get('id');
    // console.log(this.selectedId);
    this.heroService.getHeroes().then((heroes)=> {
      this.heroes = heroes;
      this.selectedHero = heroes[0];
    });
  }

  onSelect (hero): void {
    this.selectedHero = null;
    this.timer = setTimeout(()=> {
      this.selectedHero = hero;
    }, 100);
  }
  addHero (name: string) {
    name = name.trim();
    if (!name) { return ;}
    this.heroService.createHero(name).then(heroes => {
      this.heroes = heroes;
      this.selectedHero = null;
    });
  }

  ngOnDestroy (): void {
    clearTimeout(this.timer);
  }
}
