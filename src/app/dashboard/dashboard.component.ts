/**
 * Created by huangjun on 2017/10/19.
 */

import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { animateFlyInOut } from '../animations/animation';

import { Hero, HeroesService } from '../heroes/heroes.service';

@Component({
  template: `
       <h3>Top Heroes</h3>
       <div class="grid grid-pad">
          <a *ngFor="let hero of heroes" [routerLink]="['/heroDetail', hero.id]" class="col-1-4">
             <div class="module hero">
                <h4> {{ hero.name }} </h4>
             </div>
          </a>
       </div>
    `,
  styleUrls: ['./dashboard.component.css'],
  animations: [ animateFlyInOut ]
})

export class DashBoardComponent implements OnInit {
  @HostBinding('@flyInOut') flyInOut = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  heroes: Hero[];
  constructor (
    private service: HeroesService,
    private route: ActivatedRoute
  ) { }
  ngOnInit (): void {
    this.service.getHeroes().then(heroes=> {
      this.heroes = heroes.slice(1, 5);
    })
  }
}
