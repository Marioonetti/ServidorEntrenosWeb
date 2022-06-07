import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { ValidarTokenGuard } from './guards/validar-token.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(modulo => modulo.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./entrenoApp/entreno-app.module')
      .then(modulo => modulo.EntrenoAppModule), 
      canActivate: [ValidarTokenGuard],
      canLoad : [ValidarTokenGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
