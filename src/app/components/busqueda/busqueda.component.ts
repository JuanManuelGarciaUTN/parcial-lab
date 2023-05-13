import { Component } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { DbPeliculasService } from 'src/app/services/db-peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {
  public pelicula?: Pelicula;
  public borrando: boolean = false;

  constructor(private dbPeliculas: DbPeliculasService){}

  onSeleccion(peliculaSeleccionada: Pelicula) {
    this.pelicula = peliculaSeleccionada;
  }

  iniciarBorrado(){
    this.borrando = true;
  }

  cancelar(){
    this.borrando = false;
  }

  borrar(){
    if(this.pelicula){
      this.dbPeliculas.borrarPelicula(this.pelicula.id);
      this.borrando = false;
      this.pelicula = undefined;
    }
  }
}
