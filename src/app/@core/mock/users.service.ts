import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    admin: { name: 'Admin', email: 'admin@example.org', password: 'admin' }
  };

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }
}
