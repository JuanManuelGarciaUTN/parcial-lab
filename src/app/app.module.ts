import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas-alta/peliculas-alta.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { ModificarPeliculaComponent } from './components/modificar-pelicula/modificar-pelicula.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculasAltaComponent,
    PeliculasListadoComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    TablaPeliculaComponent,
    BienvenidaComponent,
    DetallePeliculaComponent,
    ModificarPeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
