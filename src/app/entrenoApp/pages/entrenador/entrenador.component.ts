import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EntrenadorService} from '../../services/entrenador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html'
})
export class EntrenadorComponent implements OnInit {

  entrenadorForm: FormGroup = this.formBuilder.group({
    username: [, Validators.required],
    password: [, Validators.required],
    nombre: [, Validators.required],
    apellidos: [, Validators.required],
    edad: [, Validators.required],
    imagen: [, Validators.required],

  })

  rutaImagen: string = ""

  constructor(private formBuilder: FormBuilder,
              private entrenadorService: EntrenadorService) {
  }


  ngOnInit(): void {
    this.entrenadorForm.valueChanges.subscribe(({imagen}) => {
      this.rutaImagen = imagen
    })
  }


  addEntrenador() {
    if (this.entrenadorForm.invalid) {
      this.entrenadorForm.markAllAsTouched();
      return;
    }
    const formValue = {...this.entrenadorForm.value};

    this.entrenadorService.addEntrenador(formValue)
      .subscribe({
        next: entrenador => {
          Swal.fire({
            title: 'Entrenador Añadido Correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.entrenadorForm.reset()
          this.rutaImagen = ""
        },
        error: error => {
          Swal.fire({
            title: error.error.mensaje,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });
    this.entrenadorForm.reset();

  }

  validarCampo(valor: string) {
    return this.entrenadorForm.controls[valor].errors &&
      this.entrenadorForm.controls[valor].touched;
  }

}
