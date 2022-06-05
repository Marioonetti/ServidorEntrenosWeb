import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

constructor() { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NTQzNTkxMjIsInVzZXIiOiJtYXJpbyIsImdyb3VwIjpbInRyYWluZXIiLCJ1c2VyIl19.MHXUCYi1ArFH5MNaxoITCZi4bL5ThF4LAvf-l6YQg8HuqcU0y_DuhrWOhAsqsGiReQw_4RtAPtuCQyz5iw3_Iw',
      'Content-Type': 'application/json'
    })

  const reqClone = req.clone({
    headers
  })

    return next.handle( reqClone );
  }

}
