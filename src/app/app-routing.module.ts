import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
      .then(modulo => modulo.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./entrenoApp/entreno-app.module')
      .then(modulo => modulo.EntrenoAppModule)
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
