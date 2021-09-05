import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'typescript-code',
  templateUrl: './typescript-code.component.html',
  styleUrls: ['./typescript-code.component.scss']
})
export class TypescriptCodeComponent implements OnInit {

  @Input() htmlCode : string;
  constructor() { }
  ngOnInit(): void {}

}
