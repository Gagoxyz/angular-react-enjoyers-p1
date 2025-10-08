import { Component } from '@angular/core';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-media',
  imports: [],
  templateUrl: './media.html',
  styleUrl: './media.css'
})
export class MediaComponent {
  player: Player | undefined;
}
