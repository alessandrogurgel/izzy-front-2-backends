import { User } from 'app/@core/data/users';
import { timeStamp } from 'console';

export class DataSession {
  private user: User = null;

  constructor(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
