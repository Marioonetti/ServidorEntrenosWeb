import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Entrenador } from '../interfaces/interfaces.component';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  private baseUrl: string = environment.baseUrl;
  private id: number = 7;
  
  constructor( private http: HttpClient ) {
    //this.id = JSON.parse(localStorage.getItem('id')!) || 0;
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
