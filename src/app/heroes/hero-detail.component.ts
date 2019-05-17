/**
 * Created by huangjun on 2017/10/19.
 */

import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
// import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { animateFlyInOut } from '../animations/animation';

import { Hero, HeroesService } from './heroes.service';
@Component({
  // selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [ animateFlyInOut ]
})

export class HeroDetailComponent implements OnInit {
  //@Input() hero: Hero;
  @HostBinding('@flyInOut') flyInOut = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  hero: Hero;

  constructor (
    private service: HeroesService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }
  ngOnInit (): void {
    this.route.paramMap
      .switchMap((params: ParamMap)=> this.service.getHero(params.get('id')))
      .subscribe(hero=> { this.hero = hero });
  }

  gotoHeroes (hero: Hero) {
    let heroId = hero? hero.id : null;
    this.router.navigate(['/heroes', { id: heroId }]);
  }

  goBack () {
    this.location.back();
  }
}
