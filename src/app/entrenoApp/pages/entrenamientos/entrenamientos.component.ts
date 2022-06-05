import { Component, OnInit } from '@angular/core';
import { Ejercicio, Cliente } from '../../interfaces/interfaces.component';
import { EjercicioService } from '../../services/ejercicio.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html'
})
export class EntrenamientosComponent implements OnInit {




  entrenamientoForm: FormGroup = this.formBuilder.group({
    ejercicio: [ ,Validators.required],
  })

  listaEjercicios : Ejercicio[] =  []

  listaClientes : Cliente[] =  []

  constructor(
    private ejercicioService : EjercicioService
    ,private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.ejercicioService.getAllEjercicios()
    .subscribe( ok => {
      console.log(ok)
      this.listaEjercicios = ok
    });

  }

  addEntrenamiento(){
    console.log(this.entrenamientoForm.value)
  }

}
