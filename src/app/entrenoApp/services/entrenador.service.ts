import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Entrenador } from '../interfaces/interfaces.component';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  private baseUrl: string = environment.baseUrl;
  private id: number = Number(localStorage.getItem('id'));
  
  constructor( private http: HttpClient ) {
   }

  addEntrenador(entrenador: Entrenador){
    const url  = `${ this.baseUrl }registro/entrenador`;

    return this.http.post(url, JSON.stringify(entrenador));
  }

  getEntrenador(){
    const url  = `${ this.baseUrl }entrenador/${this.id}`;

    return this.http.get<Entrenador>(url);
}


updateEntrenadorInfo(entrenador : Entrenador){
  const url  = `${ this.baseUrl }entrenador`;

  return this.http.put<Entrenador>(url, JSON.stringify(entrenador));
}

}
