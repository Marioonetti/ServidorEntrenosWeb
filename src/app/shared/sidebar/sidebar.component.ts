import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
      `
      li{
        cursor: pointer;
      }
      `
  ]
})
export class SidebarComponent {

  constructor(private router: Router) { }

  logout(){
    const user = localStorage.removeItem('user')
    const password = localStorage.removeItem('password')
    const token = localStorage.removeItem('token')
    this.router.navigateByUrl('/auth')
  }

}
