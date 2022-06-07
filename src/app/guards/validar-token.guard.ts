import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../auth/services/login.service';
import { User } from '../auth/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {

constructor(
  private router : Router
){}

  canActivate(): Observable<boolean> | boolean {
    if(!this.hasToken){
      this.router.navigateByUrl("/auth")
    }
    return this.hasToken();
  }

  canLoad(): Observable<boolean> | boolean {
    if(!this.hasToken){
      this.router.navigateByUrl("/auth")
    }
    return this.hasToken();
  }
  
  hasToken(): boolean{
    const token = localStorage.getItem('token')
    if(token != null){
        return true;
    }
    else{
      return false;
    }
  }

}
