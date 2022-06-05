import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EntrenamientosComponent } from './entrenoApp/pages/entrenamientos/entrenamientos.component';
import { EjerciciosComponent } from './entrenoApp/pages/ejercicios/ejercicios.component';
import { EntrenadorComponent } from './entrenoApp/pages/entrenador/entrenador.component';
import { PerfilComponent } from './entrenoApp/pages/perfil/perfil.component';


const routes: Routes = [
    {
        path : '',
        component : EntrenamientosComponent,
        pathMatch: 'full'
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
    },{
        path : '**',
        redirectTo : ''
    }
]


@NgModule({
    declarations: [
      
    ],
    imports: [
     RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })
export class AppRoutingModule{

}