export enum TipoPelicula {
    terror = "Terror",
    comedia = "Comedia",
    amor = "Amor",
    otros = "Otros"
  }

export class Pelicula {
    public id: string;
    public nombre: string;
    public tipo: TipoPelicula;
    public fechaDeEstreno: string;
    public cantidadPublico: number;
    public foto: string;

    constructor(_id: string, _nombre: string, _tipo: TipoPelicula, _fechaDeEstreno: string, _cantidadPublico: number, _foto: string) {
        this.id = _id;
        this.nombre = _nombre;
        this.tipo = _tipo;
        this.fechaDeEstreno = _fechaDeEstreno;
        this.cantidadPublico = _cantidadPublico;
        this.foto = _foto;
    }
}
