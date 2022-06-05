import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { EntrenadorComponent } from './pages/entrenador/entrenador.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EjerciciosComponent,
    PerfilComponent,
    EntrenamientosComponent,
    EntrenadorComponent
  ],
  exports :[
    EjerciciosComponent,
    PerfilComponent,
    EntrenamientosComponent,
    EntrenadorComponent
  ],

  imports: [
    NgbModule,
    ReactiveFormsModule,
    CommonModule
  ],
 
})
export class EntrenoAppModule { }
