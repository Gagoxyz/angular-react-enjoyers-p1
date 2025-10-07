import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail-component/detail-component';
import { Player } from '../models/player.model';


// Player interface moved to shared model for reuse

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [CommonModule, DetailComponent],
  templateUrl: './players-component.html',
  styleUrl: './players-component.css'
})
export class PlayersComponent {
   players: Player[] = [
    { id: 1, name: 'Luka Dončić', position: 'Base', age: 25, altura: 201, image: '/images/jugador1.png' },
    { id: 2, name: 'Giannis Antetokounmpo', position: 'Ala-Pívot', age: 29, altura: 201, image: '/images/jugador1.png' },
    { id: 3, name: 'Stephen Curry', position: 'Escolta', age: 36, altura: 201, image: '/images/jugador1.png' },
    { id: 4, name: 'LeBron James', position: 'Alero', age: 39, altura: 201, image: '/images/jugador1.png' },
    { id: 5, name: 'Nikola Jokić', position: 'Pívot', age: 29, altura: 201, image: '/images/jugador1.png' },
    { id: 6, name: 'Kevin Durant', position: 'Alero', age: 36, altura: 201, image: '/images/jugador1.png' }
  ];

  // Ejemplo de condicional con *ngIf
  showList = true;

  selectedPlayer: Player | null = null;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  trackById(_index: number, player: Player): number {
    return player.id;
  }
}

