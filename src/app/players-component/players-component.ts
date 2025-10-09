import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from '../detail-component/detail-component';
import { Player } from '../models/player.model';
import { PlayerFilterPipe } from '../player-filter-pipe';

@Component({
  selector: 'app-players-component',
  standalone: true,
  imports: [CommonModule, FormsModule, DetailComponent, PlayerFilterPipe],
  templateUrl: './players-component.html',
  styleUrls: ['./players-component.css']
})
export class PlayersComponent {
  players: Player[] = [
    {
      id: 1,
      nombre: 'Nikola',
      apellidos: 'Jokić',
      posicion: 'Pívot',
      edad: 30,
      altura: 211,
      image: '/images/nikola.png',
      multimedia: [
        '/images/nikola.png',
        '/images/luka.png',
        '/videos/Presentacion.mp4',
        'https://www.youtube.com/embed/CXLM08fZO5o?si=kT_dSd_R541gL_FF'
      ]
    },
    {
      id: 2,
      nombre: 'Giannis',
      apellidos: 'Antetokounmpo',
      posicion: 'Ala-Pívot / Pívot',
      edad: 30,
      altura: 211,
      image: '/images/giannis.png',
      multimedia: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg/330px-Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg'
      ]
    },
    {
      id: 3,
      nombre: 'Luka',
      apellidos: 'Dončić',
      posicion: 'Base / Escolta',
      edad: 25,
      altura: 201,
      image: '/images/luka.png',
      multimedia: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Luka_Doncic_%2851914951721%29_%28cropped1%29.jpg/330px-Luka_Doncic_%2851914951721%29_%28cropped1%29.jpg'
      ]
    },
    {
      id: 4,
      nombre: 'Stephen',
      apellidos: 'Curry',
      posicion: 'Base / Escolta',
      edad: 36,
      altura: 191,
      image: '/images/Stepen.png',
      multimedia: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Steph_Curry_P20230117AS-1347_%28cropped%29.jpg/330px-Steph_Curry_P20230117AS-1347_%28cropped%29.jpg'
      ]
    },
    {
      id: 5,
      nombre: 'Kevin',
      apellidos: 'Durant',
      posicion: 'Alero / Ala-Pívot',
      edad: 36,
      altura: 208,
      image: '/images/kevin.png',
      multimedia: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Kevin_Durant_Interview_in_2023_-_2.png/330px-Kevin_Durant_Interview_in_2023_-_2.png'
      ]
    },
    {
      id: 6,
      nombre: 'LeBron',
      apellidos: 'James',
      posicion: 'Alero / Ala-Pívot',
      edad: 40,
      altura: 206,
      image: '/images/lebron.png',
      multimedia: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/330px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg'
      ]
    }
  ];

  // Variables para filtros
  filterName: string = '';
  filterHeight: number | null = null;

  // Controla el detalle del jugador seleccionado
  selectedPlayer: Player | null = null;

  // Mostrar u ocultar lista
  showList = true;

  // Selección de jugador
  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  // trackBy para optimización de *ngFor
  trackById(_index: number, player: Player): number {
    return player.id;
  }
}
