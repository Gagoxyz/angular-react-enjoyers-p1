import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-media-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-component.html',
  styleUrls: ['./media-component.css']
})
export class MediaComponent {
  @Input() player!: Player;

  constructor(private sanitizer: DomSanitizer) {}

  isImage(file: string): boolean {
    return file.match(/\.(jpeg|jpg|png|gif|webp)$/i) !== null;
  }

  isVideo(file: string): boolean {
    return file.match(/\.(mp4|webm|ogg)$/i) !== null;
  }

  isYouTube(file: string): boolean {
    return file.includes('youtube.com/embed');
  }

  safeYouTubeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}