import { Component, OnInit ,Input} from '@angular/core';
import {Location} from '@angular/common'
import {ActivatedRoute} from '@angular/router';


import { Hero } from 'src/app/models/Hero';
import {HeroService} from '../../services//hero.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent implements OnInit {

   hero:Hero;

  constructor(private _heroService:HeroService,
    private _activate:ActivatedRoute,private _location:Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero():void{
    let id = +this._activate.snapshot.paramMap.get('id');
    this._heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }

  goBack():void{
    this._location.back();
  }
}
