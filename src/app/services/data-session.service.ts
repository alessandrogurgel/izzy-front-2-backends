import { Injectable } from '@angular/core';
import { DataSession } from './data-session';

@Injectable({
  providedIn: 'root'
})
export class DataSessionService {

  readonly DATA_SESSION_KEY = 'dataSessionKey'

  constructor() { }

  setDataSession(data: DataSession) : void {
    window.localStorage.setItem(this.DATA_SESSION_KEY, JSON.stringify(data));
  }

  getDataSession() : DataSession {
    const data: string = window.localStorage.getItem(this.DATA_SESSION_KEY);
    if (!data) {
      return null;
    }
    const object : any  = JSON.parse(data)
    return new DataSession(object.user);
  }

  clearDataSession(): void {
    window.localStorage.removeItem(this.DATA_SESSION_KEY);
  }

}
