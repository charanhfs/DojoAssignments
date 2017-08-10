import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


import { ListService } from '../services/list.service';
import { List } from '../list';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent{
  list: List;

  // constructor(private listService: ListService) {}

}