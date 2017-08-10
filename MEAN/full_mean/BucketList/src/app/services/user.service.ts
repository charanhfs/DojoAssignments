import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../user';

@Injectable()
export class UserService {
  constructor(private cookieService: CookieService, private http: Http) {}

  login(user: User): Promise<User> {
    return this.http.post('/api/auth/login', user)
      .map(response => response.json())
      .toPromise();
  }

  logout(): Promise<User> {
    return this.http.delete('/api/auth/logout')
      .map(data => data.json())
      .toPromise();    
  }
  getUser(id: string): Promise<User> {
    console.log('getting by id', id);
    return this.http.get(`/api/auth/${ id }`)
      .map(data => data.json())
      .toPromise();
  }
}