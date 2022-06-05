import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Ejercicio } from '../interfaces/interfaces.component';



@Injectable({
    providedIn: 'root'
  })
export class EjercicioService {
  
    private baseUrl: string = environment.baseUrl;
  
    constructor( private http: HttpClient ) { }
  
    addEjercicio(ejercicio : Ejercicio){
        const url  = `${ this.baseUrl }ejercicios`;

      return this.http.post(url, JSON.stringify(ejercicio));
    }

    getAllEjercicios(){
    const url  = `${ this.baseUrl }ejercicios`;
    return this.http.get<Ejercicio[]>(url);
  }
   
  }