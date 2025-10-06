import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { PlayersComponent } from './players/players';

@Component({
  selector: 'app-root',
  imports: [PlayersComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('equipo-basket');
}
