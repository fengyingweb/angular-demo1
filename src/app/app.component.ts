import { Component } from '@angular/core';

import { Hero } from './heroes/heroes.service';

@Component({
  selector: 'app-root',
  template: `
       <div class="container">
          <div class="row">
             <div class="col-lg-6 col-lg-offset-3">
                <h1 class="text-center">{{ title }}</h1>
                <h2> {{ hero.name }} details!</h2>
             </div>
          </div>
       </div>
     `,
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero= new Hero(1, 'Windstorm');
}
