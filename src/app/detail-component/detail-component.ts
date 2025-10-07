import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Player } from '../models/player.model';

@Component({
  selector: 'app-detail-component',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css'
})
export class DetailComponent {
  @Input() player: Player | null = null;
}
