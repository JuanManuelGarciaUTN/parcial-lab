import { Component, Input } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent {
  @Input() pelicula?: Pelicula;
}
