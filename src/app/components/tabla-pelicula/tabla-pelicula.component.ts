import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pelicula, TipoPelicula } from 'src/app/entidades/pelicula';
import { DbPeliculasService } from 'src/app/services/db-peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent {
  @Output() peliculaSeleccionada = new EventEmitter<Pelicula>();

  public peliculas: Array<Pelicula> = [];
  private subToPeliculas?: Subscription;

  constructor(private dbPeliculas: DbPeliculasService) {}

  ngOnInit() {
    this.subToPeliculas = this.dbPeliculas.obtenerPeliculas().subscribe(datos=>{
      this.peliculas = datos;
      /*this.peliculas.push(datos[0]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);      this.peliculas.push(datos[0]);
      this.peliculas.push(datos[1]);
      this.peliculas.push(datos[2]);*/
    });
  }

  ngOnDestroy() {
    if (this.subToPeliculas)
      this.subToPeliculas.unsubscribe();
  }

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada.emit(pelicula);
  }
}
