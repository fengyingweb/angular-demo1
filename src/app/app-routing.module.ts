/**
 * Created by huangjun on 2017/10/18.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeroListComponent } from './heroes/hero-list.component';
// import { HeroDetailComponent } from './heroes/hero-detail.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes= [
  { path: 'dashboard', component: DashBoardComponent },
  //{ path: 'heroes', component: HeroListComponent },
  //{ path: 'hero/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

const router = RouterModule.forRoot(
  appRoutes,
  {
    // enableTracing: true, // 调试的时候用
    useHash: true
  });
@NgModule({
  imports: [ router ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
