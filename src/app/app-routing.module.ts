import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroeDetailComponent } from './components/heroe-detail/heroe-detail.component';


const ROUTES:Routes=[
  {path:"heroes",component:HeroesComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"detail/:id" ,component:HeroeDetailComponent},
  {path:"" ,pathMatch:"full",redirectTo:"dashboard"}
]


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
