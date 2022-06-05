import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EntrenamientosComponent } from './pages/entrenamientos/entrenamientos.component';
import { EjerciciosComponent } from './pages/ejercicios/ejercicios.component';
import { EntrenadorComponent } from './pages/entrenador/entrenador.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import {MainComponent} from "./pages/main/main.component";


const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      {
        path : 'entrenamientos',
        component : EntrenamientosComponent
      },
      {
        path : 'ejercicios',
        component : EjerciciosComponent
      },
      {
        path : 'entrenador',
        component : EntrenadorComponent
      },
      {
        path : 'perfil/:id',
        component : PerfilComponent
      },
      {
        path : '**',
        redirectTo : 'entrenamientos'
      }
    ]

  },
]
@NgModule({
    imports: [
     RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
  })
export class EntrenoRoutingModule {
}
