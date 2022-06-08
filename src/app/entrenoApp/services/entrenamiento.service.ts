import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Entrenamiento} from "../interfaces/interfaces.component";

@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  private baseUrl: string = environment.baseUrl;
 

  constructor( private http: HttpClient ) {
  }

  addEntreno(entreno : Entrenamiento){

    const url  = `${ this.baseUrl }entreno`;

    return this.http.post<Entrenamiento>(url, JSON.stringify(entreno));

  }



}
