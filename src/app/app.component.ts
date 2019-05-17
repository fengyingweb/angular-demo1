/**
 * Created by huangjun on 2017/10/18.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
       <div class="container">
         <div class="row">
            <div class="hero-box col-lg-6 col-lg-offset-3">
               <h1>{{ title }}</h1>
               <nav>
                  <a routerLink="/dashboard" routerLinkActive="active">DashBoard</a>
                  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
               </nav>
               <router-outlet></router-outlet>
            </div>
         </div>
       </div>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}
