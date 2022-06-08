import { Component, OnInit } from '@angular/core';
import { Ejercicio, Cliente } from '../../interfaces/interfaces.component';
import { EjercicioService } from '../../services/ejercicio.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { EntrenamientoService } from '../../services/entrenamiento.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html'
})
export class EntrenamientosComponent implements OnInit {

  entrenamientoForm: FormGroup = this.formBuilder.group({
    titulo: [ ,Validators.required],
    comentario: [ ,Validators.required],
    idCliente: [ ,Validators.required],
    series : this.formBuilder.array([
      this.serieForm(),
      ])

  })



  listaEjercicios : Ejercicio[] =  []

  listaClientes : Cliente[] =  []

  listaEnfoque : string[] =  [
    'Empujes', 'Tracciones', 'Pierna'
  ]

  constructor(
    private ejercicioService : EjercicioService,
    private clienteService : ClienteService,
    private entrenamientoService  :EntrenamientoService,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.ejercicioService.getAllEjercicios()
    .subscribe({
      next: ejercicios =>{
        this.listaEjercicios = ejercicios
      },
      error : error =>{
        Swal.fire({
          title: error.error.mensaje,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    })


    this.clienteService.getClientesByEntrenador()
    .subscribe({
      next: clientes =>{
        this.listaClientes = clientes
      },
      error : error =>{
        Swal.fire({
          title: error.error.mensaje,
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    })

  }

  get ejercicios(){
    return {...this.listaEjercicios}
  }

  serieForm(){
    return this.formBuilder.group({
      rir: [ ],
      ejercicio: [ ] ,
      enfoque: [ ],
      seriesRepeticiones: [ ]
    })
  }

  addSerie(){
    this.series.push(this.serieForm())
  }

  delSerie(index : number){
    if(this.series.length != 0){
      this.series.removeAt(index)
    }
  }

  get series(){
    return this.entrenamientoForm.get("series") as FormArray;
  }

  addEntrenamiento(){
    if(this.entrenamientoForm.invalid){
      this.entrenamientoForm.markAllAsTouched();
      return;
    }
    this.entrenamientoService.addEntreno(this.entrenamientoForm.value)
      .subscribe({
        next: entrenamiento =>{
          console.log(entrenamiento)
          Swal.fire({
            title: 'Entrenamiento añadido Correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.entrenamientoForm.reset()
        },
        error : error =>{
          Swal.fire({
            title: error.error.mensaje,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      })
  }

  validarCampo(valor : string){
    return this.entrenamientoForm.controls[valor].errors &&
      this.entrenamientoForm.controls[valor].touched;
  }


}
