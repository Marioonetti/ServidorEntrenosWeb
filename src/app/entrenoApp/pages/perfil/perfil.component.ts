import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntrenadorService } from '../../services/entrenador.service';
import { Entrenador } from '../../interfaces/interfaces.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  entrenadorForm: FormGroup = this.formBuilder.group({
    username: [ ,Validators.required],
    password: [],
    nombre: [ ,Validators.required],
    apellidos: [ ,Validators.required],
    edad: [ ,Validators.required],
    imagen: [ ,Validators.required],
    descripcion: [ ,Validators.required],
    
  })

  entrenadorUpdate : Entrenador = {
    id : 0,
    username: "",
    password: "",
    nombre: "",
    apellidos: "",
    edad: 0 ,
    imagen: "",
    descripcion: "",
  }

  constructor(private formBuilder : FormBuilder, 
    private entrenadorService: EntrenadorService) { }


  ngOnInit(): void {

    this.entrenadorForm.valueChanges.subscribe(form =>
      {
        this.entrenadorUpdate = form
      })

      this.getEntrenador().subscribe( ok => {
        console.log(ok)
        this.entrenadorForm.patchValue({
          username: ok.username,
          nombre: ok.nombre,
          apellidos: ok.apellidos,
          edad: ok.edad ,
          imagen: ok.imagen,
          descripcion: ok.descripcion,

        })

      });
  
  

  }


  getEntrenador(){
    return this.entrenadorService.getEntrenador();
  }


  updateEntrenador(){
    if(this.entrenadorForm.invalid){
      this.entrenadorForm.markAllAsTouched();
      return;
    }

    console.log(this.entrenadorUpdate)
    this.entrenadorService.updateEntrenadorInfo(this.entrenadorUpdate)
    .subscribe( ok => {
      console.log(ok)
    });

  }

  validarCampo(valor : string){
    return this.entrenadorForm.controls[valor].errors && 
            this.entrenadorForm.controls[valor].touched;
  }

}
