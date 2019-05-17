/**
 * Created by huangjun on 2017/10/19.
 */

import { Component, Input, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './heroes.service';
// import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { animateFlyInOut } from '../animations/animation';

@Component({
  selector: 'hero-mini',
  template: `
       <div class="btn-box">
         <h2>{{ hero.name | uppercase }} is my hero</h2>
         <input type="text" [(ngModel)]="name">
         <span>{{ name }}</span>
         <button (click)="gotoDetail()">View Details</button>
       </div>
    `,
  animations: [ animateFlyInOut ]
})

export class HeroMiniComponent {
  @Input() hero: Hero;
  @HostBinding('@flyInOut') flyInOut = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  heroName: string;

  get name(): string { return this.heroName }
  set name (newVal:string) {
    console.log(newVal);
    this.heroName = newVal;
  }
  constructor(private router: Router) { }

  gotoDetail () {
    let heroId = this.hero? this.hero.id : null;
    this.router.navigate(['/heroDetail', heroId]);
  }
}
