import { Component, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Player } from '../models/player.model';
import { MediaComponent } from '../media-component/media-component';

@Component({
  selector: 'app-detail-component',
  standalone: true,
  imports: [CommonModule, NgIf, MediaComponent],
  templateUrl: './detail-component.html',
  styleUrls: ['./detail-component.css']  // ojo: debe ser 'styleUrls' en plural
})
export class DetailComponent {
  @Input() player: Player | null = null;
  showMedia = false;

  toggleMedia(): void {
    this.showMedia = !this.showMedia;
  }
}

