import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
      .subscribe(data => this.heroes = data);
  }

  getDetails(hero: Hero) {
    this.selectedHero = hero;
  }
}
