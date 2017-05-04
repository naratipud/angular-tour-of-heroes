import { Component, OnInit } from '@angular/core';

import { HeroService } from './shared/hero.service';
import { Hero } from './shared/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

