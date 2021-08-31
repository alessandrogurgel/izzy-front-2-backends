import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DataSessionService } from './data-session.service';
import { DataSession } from './data-session';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate{

  constructor(
    private sessionService: DataSessionService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    return new Promise<boolean>((resolve) => {
      const dataSession : DataSession = this.sessionService.getDataSession();

      if (dataSession) {
        resolve(true);
      } 
      else {
        this.router.navigate(['authenticate/login']);
        resolve(false);
      }
    });
  }
}
