import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Entrenador} from '../interfaces/interfaces.component';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  addEntrenador(entrenador: Entrenador) {
    const url = `${this.baseUrl}registro/entrenador`;

    return this.http.post(url, JSON.stringify(entrenador));
  }

  getEntrenador() {
    let id: number = Number(localStorage.getItem('id'));
    const url = `${this.baseUrl}entrenador/${id}`;
    return this.http.get<Entrenador>(url);
  }


  updateEntrenadorInfo(entrenador: Entrenador) {
    let id: number = Number(localStorage.getItem('id'));
    entrenador.id = id;
    const url = `${this.baseUrl}entrenador`;

    return this.http.put<Entrenador>(url, JSON.stringify(entrenador));
  }

}
