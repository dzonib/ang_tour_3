import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './models/Hero';
import { HEROES } from './mockheroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero: Hero;
  heroes: Hero[] = HEROES;

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
