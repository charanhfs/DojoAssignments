import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import { User } from '../user'; 

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./style.css']
})

export class IndexComponent{

  registrationErrors: string[] = [];

  user: User = new User();

  constructor(private auth: UserService, private router: Router) {}

  onSubmit(user: User) {

    this.auth.login(user)
      .then((user) => this.router.navigate(['dashboard']))
      .catch(response => this.handleErrors(response.json()))

  }

  private handleErrors(errors: string[] | Error) {
    this.registrationErrors = Array.isArray(errors) ? errors : [errors.message];
  }


}