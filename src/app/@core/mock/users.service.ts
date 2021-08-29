import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    adminBR: { name: 'Admin BR', email: 'admin@example.com.br', password: 'adminbr', locale: 'pt-BR' },
    adminMX: { name: 'Admin MX', email: 'admin@example.com.mx', password: 'adminmx', locale: 'es-MX' }
  };

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }
}
