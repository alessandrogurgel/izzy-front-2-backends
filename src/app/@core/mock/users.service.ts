import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    admin: { name: 'Admin' }
  };

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }
}
