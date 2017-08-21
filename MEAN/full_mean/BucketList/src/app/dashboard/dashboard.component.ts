import { Component, OnInit } from '@angular/core';

import { ListService } from '../services/list.service';
import { UserService } from '../services/user.service';
import { List } from '../list';
import { User } from '../user';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  list: List = new List();

  users: Array<User> = [];

  constructor(private userService: UserService, private listService: ListService) {}

  ngOnInit() {
    this.userService.getUsers()
      .then(users => this.users = users)
      .catch(() => {});
  }

  username(): string {
  return this.userService.getUsername() || 'Guest';
  }

   onSubmit(form): void {
    event.preventDefault();

    console.log(this.list);

    this.listService.createList(this.list)
      .then(() => this.list = new List())
      .catch(console.log);
  }

}