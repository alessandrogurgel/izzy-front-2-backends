import { Observable } from 'rxjs';

export class User {
  name: string;
  email: string;
  password: string;
  locale: string;
}


export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
}
