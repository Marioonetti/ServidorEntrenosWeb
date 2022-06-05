import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {LoginComponent} from "./pages/login/login.component";
import { MainComponent } from './pages/main/main.component';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegistroComponent,
   ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
