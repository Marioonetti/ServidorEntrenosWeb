import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EntrenadorService} from '../../services/entrenador.service';
import {Entrenador} from '../../interfaces/interfaces.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  entrenadorForm: FormGroup = this.formBuilder.group({
    username: [, Validators.required],
    nombre: [, Validators.required],
    apellidos: [, Validators.required],
    edad: [, Validators.required],
    imagen: [, Validators.required],
    descripcion: [, Validators.required],

  })

  entrenadorUpdate: Entrenador = {
    username: "",
    password: "",
    nombre: "",
    apellidos: "",
    edad: 0,
    imagen: "",
    descripcion: "",
    id: 0
  }

  constructor(private formBuilder: FormBuilder,
              private entrenadorService: EntrenadorService) {
  }


  ngOnInit(): void {

    this.entrenadorForm.valueChanges.subscribe(form => {
      this.entrenadorUpdate = form
    })

    this.getEntrenador()
      .subscribe({
        next: entrenador => {
          this.entrenadorForm.reset()
          this.entrenadorForm.patchValue({
            username: entrenador.username,
            nombre: entrenador.nombre,
            apellidos: entrenador.apellidos,
            edad: entrenador.edad,
            imagen: entrenador.imagen,
            descripcion: entrenador.descripcion,
          })
          this.entrenadorUpdate = entrenador
        },
        error: error => {
          Swal.fire({
            title: error.error.mensaje,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });

  }


  getEntrenador() {
    return this.entrenadorService.getEntrenador();
  }


  updateEntrenador() {
    if (this.entrenadorForm.invalid) {
      this.entrenadorForm.markAllAsTouched();
      return;
    }

    this.entrenadorService.updateEntrenadorInfo(this.entrenadorUpdate)
      .subscribe({
        next: entrenamiento => {
          Swal.fire({
            title: 'Perfil Actualizado',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        },
        error: error => {
          Swal.fire({
            title: error.error.mensaje,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });

  }

  validarCampo(valor: string) {
    return this.entrenadorForm.controls[valor].errors &&
      this.entrenadorForm.controls[valor].touched;
  }

}
