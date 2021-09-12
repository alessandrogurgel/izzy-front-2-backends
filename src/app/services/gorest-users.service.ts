import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GorestUsersService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any[]>{
    // return observableOf([{name: 'Alessandro', id: 1}])
    let observable = Observable.create(
      (observer) => {
        this.http.get('https://gorest.co.in/public/v1/users').subscribe(
          (response : any) => {
            observer.next( response.data );
            observer.complete();
          },
          (error) => {
            observer.error(error);
          }
        )
      }
    );
    return observable;
  }
}
