import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EjerciciosComponent} from './pages/ejercicios/ejercicios.component';
import {PerfilComponent} from './pages/perfil/perfil.component';
import {EntrenamientosComponent} from './pages/entrenamientos/entrenamientos.component';
import {EntrenadorComponent} from './pages/entrenador/entrenador.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './pages/main/main.component';
import {SharedModule} from "../shared/shared.module";
import {EntrenoRoutingModule} from "./entreno-routing.module";


@NgModule({
  declarations: [
    EjerciciosComponent,
    PerfilComponent,
    EntrenamientosComponent,
    EntrenadorComponent,
    MainComponent
  ],
  exports: [
    EjerciciosComponent,
    PerfilComponent,
    EntrenamientosComponent,
    EntrenadorComponent
  ],

  imports: [
    NgbModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    EntrenoRoutingModule
  ],

})
export class EntrenoAppModule {
}
