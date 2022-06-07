import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ejercicio } from '../../interfaces/interfaces.component';
import { EjercicioService } from '../../services/ejercicio.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html'
})
export class EjerciciosComponent implements OnInit{

  ejercicioForm: FormGroup = this.formBuilder.group({
    nombre: [ ,Validators.required],
    intensidad : [, Validators.required],
    grupoMuscular: [ ,Validators.required],
    descripcion: [, Validators.required],
    img: [, Validators.required]
  })

rutaImagen: string = ""

ejercicio: Ejercicio = {
      nombre: "",
      intensidad: "",
      grupoMuscular: "",
      img: "",
      descripcion: ""
}

  constructor(private formBuilder : FormBuilder, 
    private ejercicioService : EjercicioService) { }


  ngOnInit(): void {
    this.ejercicioForm.valueChanges.subscribe(({img}) =>
      {
    
        this.rutaImagen = img
        console.log(this.rutaImagen)
      })
  }

  

  addEjercicio(){
    if(this.ejercicioForm.invalid){
      this.ejercicioForm.markAllAsTouched();
      return;
    }

    const formValue = { ...this.ejercicioForm.value };
    this.ejercicio = formValue;

    console.log(this.rutaImagen)
    this.ejercicioService.addEjercicio(this.ejercicio)
    .subscribe( ok => {
      console.log(ok)
    });
    this.ejercicioForm.reset();
    this.rutaImagen =""

  }

  validarCampo(valor : string){
    return this.ejercicioForm.controls[valor].errors && 
            this.ejercicioForm.controls[valor].touched;
  }

}
