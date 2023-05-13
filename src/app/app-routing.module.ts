import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas-alta/peliculas-alta.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: "bienvenido", component: BienvenidaComponent},
  { path: "", component: BienvenidaComponent},
  { path: "busqueda", component: BusquedaComponent},
  { path: "peliculas/alta", component: PeliculasAltaComponent},
  { path: "actor/alta", component: ActorAltaComponent},
  { path: "actor/listado", component: ActorListadoComponent},
  { path: "peliculas/listado", component: PeliculasListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
