import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EntrenadorService } from '../../services/entrenador.service';

@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html'
})
export class EntrenadorComponent implements OnInit {

  entrenadorForm: FormGroup = this.formBuilder.group({
    username: [ ,Validators.required],
    password: [ ,Validators.required],
    nombre: [ ,Validators.required],
    apellidos: [ ,Validators.required],
    edad: [ ,Validators.required],
    imagen: [ ,Validators.required],
    
  })

rutaImagen: string = ""

  constructor(private formBuilder : FormBuilder, 
    private entrenadorService: EntrenadorService) { }


  ngOnInit(): void {
    this.entrenadorForm.valueChanges.subscribe(({imagen}) =>
      {
    
        this.rutaImagen = imagen
      })
  }

  

  addEntrenador(){
    if(this.entrenadorForm.invalid){
      this.entrenadorForm.markAllAsTouched();
      return;
    }

    const formValue = { ...this.entrenadorForm.value };
    

    console.log(this.rutaImagen)
    this.entrenadorService.addEntrenador(formValue)
    .subscribe( ok => {
      console.log(ok)
    });
    this.entrenadorForm.reset();

  }

  validarCampo(valor : string){
    return this.entrenadorForm.controls[valor].errors && 
            this.entrenadorForm.controls[valor].touched;
  }

}
