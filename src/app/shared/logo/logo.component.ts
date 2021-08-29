import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-logo',
  inputs: ['title'],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  title: string;
  imgSrc: string;

  constructor() { }

  ngOnInit() {
    this.imgSrc = "assets/images/logo.png";
  }

}
