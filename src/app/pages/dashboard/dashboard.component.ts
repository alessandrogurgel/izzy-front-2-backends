import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit  {

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [];
  model: any = null;

  ngOnInit(): void {
    this.model = {
      teste: false
    };
    this.fields = [
      {
        key: 'teste',
        type: 'nbCheckbox',
        templateOptions: {
          label: 'Teste Checkbox'
        }
      }
    ]
  }
}
