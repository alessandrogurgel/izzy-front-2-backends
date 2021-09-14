import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { GorestUsersService } from 'app/services/gorest-users.service';

@Component({
  selector: 'panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [];
  model: any = null;

  htmlCode : string = null;

  constructor(private gorestUsers : GorestUsersService) {
  }

  ngOnInit(): void {
    this.defineInitialModelData();
    this.specifyFormlyFields();
    this.defineDisplayCode();
    
  }
  private defineDisplayCode() {
    // extracted from markdown in https://markdowntohtml.com/
    // custom css in typescript_code.scss
    this.htmlCode = `
    <pre><code class="lang-ts">[
      {
        key: <span class="hljs-string">'startTime'</span>,
        type: <span class="hljs-string">'nbDatepicker'</span>,
        templateOptions: {
          <span class="hljs-keyword">label</span><span class="bash">: <span class="hljs-string">'Datepicker Start'</span>,
</span>          required: true,
        }
      },
      {
        key: <span class="hljs-string">'endTime'</span>,
        type: <span class="hljs-string">'nbDatepicker'</span>,
        templateOptions: {
          <span class="hljs-keyword">label</span><span class="bash">: <span class="hljs-string">'Datepicker Start'</span>,
</span>          required: true,
        }
      },
    ];
</code></pre>

    `
  }


  private specifyFormlyFields() {
    this.fields = 
    [
      {
        key: 'panel1',
        wrappers: ['nbPanel'],
        templateOptions: { label: 'Panel 1' },
        fieldGroup: [
          {
            key: 'basicInput',
            type: 'nbInput',
            templateOptions: {
              label: 'Basic Input 1',
              required: true
            }
          },
          {
            key: 'checked',
            type: 'nbCheckbox',
            templateOptions: {
              label: 'Checked 1'
            }
          },
        ]
      },
      {
        key: 'panel2',
        wrappers: ['nbPanel'],
        templateOptions: { label: 'Panel 2' },
        fieldGroup: [
          {
            key: 'checked',
            type: 'nbCheckbox',
            templateOptions: {
              label: 'Checked 2'
            }
          },
          {
            key: 'basicInput',
            type: 'nbInput',
            templateOptions: {
              label: 'Basic Input 2',
              required: true
            }
          }
        ]
      }
    ];
  }

  private defineInitialModelData() {
    this.model = {};
  }

}
