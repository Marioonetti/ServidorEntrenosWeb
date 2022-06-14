import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {User} from '../interfaces/interface';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entrenador} from '../../entrenoApp/interfaces/interfaces.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }


  doLogin(user: User): Observable<Entrenador> {
    const url = `${this.baseUrl}login/entrenador`;
    return this.http.post<Entrenador>(url, JSON.stringify(user));
  }


}
