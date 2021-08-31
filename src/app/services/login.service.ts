import { Injectable } from '@angular/core';
import { User, UserData } from 'app/@core/data/users';
import { Observable, of as observableOf } from 'rxjs';
import { map, filter, first } from 'rxjs/operators';
import { DataSession } from './data-session';
import { DataSessionService } from './data-session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private userService: UserData, private sessionService: DataSessionService) { }
  signIn(email: string, password: string) : Observable<User>  {
    return this.userService.getUsers().pipe(
      map(users => {
          let userArray = Object.keys(users).map((key: string) => users[key]);
          let filterredArray = userArray.filter((e) => e.email == email && e.password == password);
          if (filterredArray.length == 1) {
            return filterredArray[0]
          }
          return null
        } 
      )
    );
  }
  signOut() : void {
    this.sessionService.clearDataSession();
  }
}
