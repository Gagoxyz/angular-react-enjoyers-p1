import { Component } from '@angular/core';
import { Player } from '../models/player.model';
import { PLAYERS } from '../data/players';

@Component({
  selector: 'app-players',
  templateUrl: './players.html',
  styleUrls: ['./players.css']
})
export class PlayersComponent {
  players: Player[] = PLAYERS;
  selectedPlayerId: number | null = null;

  selectPlayer(player: Player) {
    this.selectedPlayerId = player.id;
    console.log('Jugador seleccionado:', player);
  }
}
