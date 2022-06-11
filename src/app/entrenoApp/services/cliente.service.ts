import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Cliente} from '../interfaces/interfaces.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }


  getClientesByEntrenador() {
    const idEntrenador = localStorage.getItem('id')

    const url = `${this.baseUrl}cliente`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("id", idEntrenador!);

    return this.http.get<Cliente[]>(url, {params: queryParams});
  }

}
