import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../app/models/player.model';

@Pipe({
  name: 'playerFilter',
  standalone: true
})
export class PlayerFilterPipe implements PipeTransform {
  transform(
    players: Player[] | null | undefined, 
    name: string = '', 
    minHeight: number | null = null
  ): Player[] {
    if (!players) return [];

    return players.filter(player => {
      const matchesName = name 
        ? player.nombre.toLowerCase().includes(name.toLowerCase()) 
        : true;

      const matchesHeight = minHeight 
        ? player.altura >= minHeight 
        : true;

      return matchesName && matchesHeight;
    });
  }
}