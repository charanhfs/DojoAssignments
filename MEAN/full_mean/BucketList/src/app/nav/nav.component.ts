import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html'
})

export class NavComponent{
    
  constructor(private auth: UserService, private router: Router) {}

    logout(){
    this.auth.logout()
      .then(() => this.router.navigate(['']))
      .catch(() => {});
  }
}