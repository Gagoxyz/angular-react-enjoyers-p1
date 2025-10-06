export interface Player {
  id: number;
  nombre: string;
  apellidos: string;
  dorsal: number;
  posicion: string;
  edad: number;
  altura: number; // en cm
  foto: string;
  videoUrl: string;
  puntosPorPartido: number;
  rebotes: number;
  asistencias: number;
}