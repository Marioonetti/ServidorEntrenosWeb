import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    username: [, Validators.required],
    password: [, Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private router: Router
  ) {
  }


  doLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    localStorage.setItem('user', this.loginForm.get('username')?.value)
    localStorage.setItem('password', this.loginForm.get('password')?.value)

    this.loginService.doLogin(this.loginForm.value)
      .subscribe({
          next: entrenador => {
            localStorage.setItem('id', entrenador.id + "")
            this.router.navigateByUrl('/dashboard')

          },
          error: msg => {
            Swal.fire({
              title: msg.error.mensaje,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }
        }
      )


  }

  validarCampo(valor: string) {
    return this.loginForm.controls[valor].errors &&
      this.loginForm.controls[valor].touched;
  }

}
