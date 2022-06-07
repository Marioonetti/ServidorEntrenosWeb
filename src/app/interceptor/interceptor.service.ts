import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import swal from'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  private baseUrl: string = environment.baseUrl;

  constructor( private router : Router ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const user = localStorage.getItem('user') || null
    const password = localStorage.getItem('password') || null
    const token = localStorage.getItem('token') || null
    let request = req


    if(user != null && password !=null){
        if(token === null){
          const credentials = user+':'+password
          const headers = new HttpHeaders({
            'Authorization': `Basic ${btoa(credentials)}`,
            'Content-Type': 'application/json'
          })
          request = req.clone({
            headers: headers
          })
        }
        else{
          const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          })
          request = req.clone({
            headers: headers
          })
        }
    }

    return next.handle( request )
    .pipe(
      tap(respuesta => {
        if(respuesta instanceof HttpResponse && respuesta.headers.get('Authorization')){
          localStorage.setItem('token', respuesta.headers.get('Authorization')!)
        }
        else if(respuesta instanceof HttpResponse && respuesta.headers.get('Expires')){
          localStorage.clear()
          this.router.navigateByUrl("/auth")
          swal.fire({
              title:"Sesión expirada", 
              text:"Se requiere un nuevo login", 
              icon: "error"
          })
        }
      }
      )
    );
  }

}
