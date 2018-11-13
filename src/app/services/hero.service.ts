import { Injectable } from '@angular/core';


import {Hero} from '../models/Hero';
import {HEROES} from '../app.mock';
import {Observable,of} from 'rxjs';
import {MessageService} from '../services/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private _msgService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    this._msgService.add('Fetched Heroes')
    return of(HEROES);
  }

  getHero(id:number):Observable<Hero>{
    this._msgService.add(`Fetched hero with id: ${id}`);
    return of(HEROES.find(hero=>hero.id===id));
  }
} 
