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
   localStorage.clear()
    this.router.navigateByUrl('/auth')
  }

}
