import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EjercicioService} from '../../services/ejercicio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html'
})
export class EjerciciosComponent implements OnInit {

  ejercicioForm: FormGroup = this.formBuilder.group({
    nombre: [, Validators.required],
    intensidad: [, Validators.required],
    grupoMuscular: [, Validators.required],
    descripcion: [, Validators.required],
    img: [, Validators.required]
  })

  rutaImagen: string = ""

  constructor(private formBuilder: FormBuilder,
              private ejercicioService: EjercicioService) {
  }


  ngOnInit(): void {
    this.ejercicioForm.valueChanges.subscribe(({img}) => {
      this.rutaImagen = img
    })
  }


  addEjercicio() {
    if (this.ejercicioForm.invalid) {
      this.ejercicioForm.markAllAsTouched();
      return;
    }

    this.ejercicioService.addEjercicio(this.ejercicioForm.value)
      .subscribe({
        next: ejercicio => {
          Swal.fire({
            title: 'Ejercicio Añadido Correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.ejercicioForm.reset()
        },
        error: error => {
          Swal.fire({
            title: error.error.mensaje,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });
    this.ejercicioForm.reset();
    this.rutaImagen = ""

  }

  validarCampo(valor: string) {
    return this.ejercicioForm.controls[valor].errors &&
      this.ejercicioForm.controls[valor].touched;
  }

}
