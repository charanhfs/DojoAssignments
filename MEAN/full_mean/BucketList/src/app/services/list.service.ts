import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { List } from '../list';

@Injectable()
export class ListService {

  constructor(private _http: Http) {}

  getLists(): Promise<List[]> {
    console.log('list from server');
    return this._http.get('/api/list')
      .map(data => data.json())
      .toPromise();
  }


  createList(list: List): Promise<List> {
    return this._http.post('/api/list', list)
      .map(data => data.json())
      .toPromise();
  }

}