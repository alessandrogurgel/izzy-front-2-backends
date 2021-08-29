import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { User } from 'app/@core/data/users';
import { LoginService } from 'app/services/login.service';


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
    private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.signIn(this.user.email, this.user.password).subscribe(
      (authenticatedUser : User) => {
        console.log(authenticatedUser);
        if (authenticatedUser) {
          alert(authenticatedUser.name);
        } else {
          alert("nao encontrado");
        }
        
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
