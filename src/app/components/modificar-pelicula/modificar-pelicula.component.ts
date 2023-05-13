import { Component, Input } from '@angular/core';
import { Pelicula, TipoPelicula } from 'src/app/entidades/pelicula';
import { DbPeliculasService } from 'src/app/services/db-peliculas.service';

@Component({
  selector: 'app-modificar-pelicula',
  templateUrl: './modificar-pelicula.component.html',
  styleUrls: ['./modificar-pelicula.component.scss']
})
export class ModificarPeliculaComponent {

  public nombre = "";
  public foto = "";
  public fechaDeEstreno = "";
  public tipo?: TipoPelicula;
  public cantidadPublico = "";
  public options: string[] = Object.values(TipoPelicula);

  private _pelicula?: Pelicula;
  
  constructor(private dbPeliculas: DbPeliculasService){}

  @Input() set pelicula(value: Pelicula | undefined) {
    this._pelicula = value;
    if(this._pelicula){
      this.tipo = this._pelicula.tipo;
      this.nombre = this._pelicula.nombre;
      this.fechaDeEstreno = this._pelicula.fechaDeEstreno;
      this.cantidadPublico = this._pelicula.cantidadPublico.toString();
      this.foto = this._pelicula.foto;
    }
  }

  get pelicula(): Pelicula | undefined{
    return this._pelicula;
  }
  
  modificar(){
    console.log(this.pelicula);
    if(this.pelicula){
      if(this.nombre){
        this.pelicula.nombre = this.nombre;
      }
      if(this.foto){
        this.pelicula.foto = this.foto;
      }
      if(this.fechaDeEstreno){
        this.pelicula.fechaDeEstreno = this.fechaDeEstreno;
      }
      if(this.cantidadPublico){
        this.pelicula.cantidadPublico = parseInt(this.cantidadPublico);
      }
      if(this.tipo){
        this.pelicula.tipo = this.tipo;
      }
      console.log(this.pelicula);
      this.dbPeliculas.modificar(this.pelicula);
    }
  }
}
