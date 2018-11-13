import { Component, OnInit } from '@angular/core';
import {Hero} from '../../models/Hero';
import {HEROES} from '../../app.mock'

import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes:Hero[];
  // selectedHero:Hero;

  constructor(private _heroService:HeroService) {
   }

  ngOnInit() {
    this.getHeroes();
  }

  // onSelectHero(hero:Hero):void{
  //   this.selectedHero = hero;
  // }

  getHeroes():void{
    this._heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

}
