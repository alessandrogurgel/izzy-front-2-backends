import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { User } from 'app/@core/data/users';

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
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.submitted = true;
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
