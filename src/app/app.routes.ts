import { Routes } from '@angular/router';
import { PlayersComponent } from './players-component/players-component';
import { MediaComponent } from './media-component/media-component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home-component/home-component').then(m => m.HomeComponent) },
  { path: 'jugadores', loadComponent: () => import('./players-component/players-component').then(m => m.PlayersComponent) },
  { path: 'media', loadComponent: () => import('./media-component/media-component').then(m => m.MediaComponent) },
  { path: 'estadisticas', loadComponent: () => import('./players-component/players-component').then(m => m.PlayersComponent) },
  { path: '**', redirectTo: '' }
];
