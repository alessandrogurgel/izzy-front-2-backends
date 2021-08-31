import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { User } from 'app/@core/data/users';
import { LoginService } from 'app/services/login.service';
import { NbThemeService } from '@nebular/theme';
import { environment } from 'environments/environment';
import { DataSessionService } from 'app/services/data-session.service';
import { DataSession } from 'app/services/data-session';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showMessages: any = {};

  user: User = new User();

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  
  constructor(
    private router: Router,
    private themeService: NbThemeService,
    private sessionService: DataSessionService,
    private loginService: LoginService) { }

  ngOnInit() {
    this.themeService.changeTheme(environment.theme);
  }

  login() {
    this.loginService.signIn(this.user.email, this.user.password).subscribe(
      (authenticatedUser : User) => {
        if (authenticatedUser) {
          this.sessionService.setDataSession(new DataSession(authenticatedUser));
          this.clearMessages();
          setTimeout(
            () => {
              this.submitted = false;
              this.router.navigate(['pages']);
            }, 2000
          );
        } else {
          this.submitted = false;
          let errorMessage = 'Erro na autenticação.';
          this.errors.push(errorMessage);
          this.clearMessages();
        }
        
      },
      (response) => {
        this.submitted = false;
        let errorMessage = response.error && _.get(response.error,'errors').join() || 'Erro na autenticação.';
        this.errors.push(errorMessage);
        this.clearMessages();
      }
    )
    
  }

  private clearMessages() {
    setTimeout(
      () => {
        this.errors = [];
        this.messages = []
      }, 3000
    )
  }

}
