import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../entidades/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DbPeliculasService {

  constructor(private firestore: Firestore) { }

  obtenerPeliculas(): Observable<Pelicula[]>{
    const coleccion = collection(this.firestore, "peliculas");
    return collectionData(coleccion, {idField: 'id'}) as Observable<Pelicula[]>;
  }

  borrarPelicula(id: string): void{
    const coleccion = collection(this.firestore, "peliculas");
    const documento = doc(coleccion, id);
    deleteDoc(documento);
  }

  modificar(pelicula: Pelicula): void{
    const coleccion = collection(this.firestore, "peliculas");
    const documento = doc(coleccion, pelicula.id);

    updateDoc(documento, {
      nombre: pelicula.nombre,
      foto: pelicula.foto,
      fechaDeEstreno: pelicula.fechaDeEstreno,
      cantidadPublico: pelicula.cantidadPublico,
      tipo: pelicula.tipo});
  }
}
