import { Component } from '@angular/core';
import { HeroService } from './services/hero/hero.service';
import { Hero } from './heroModel/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';

  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.takeAllHeroes()
  }
}


