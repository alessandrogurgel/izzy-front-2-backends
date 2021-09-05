import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [];
  model: any = null;

  htmlCode : string = null;

  ngOnInit(): void {
    this.defineInitialModelData();
    this.specifyFormlyFields();
    this.defineDisplayCode();
    
  }
  private defineDisplayCode() {
    // extracted from markdown in https://markdowntohtml.com/
    this.htmlCode = `
      <pre><code class="lang-ts">
      this<span class="hljs-selector-class">.fields</span> = [
            {
              key: <span class="hljs-string">'teste'</span>,
              type: <span class="hljs-string">'nbCheckbox'</span>,
              templateOptions: {
                <span class="hljs-selector-tag">label</span>: <span class="hljs-string">'Teste Checkbox'</span>
              }
            }
      ]
      </code></pre>
    `
  }


  private specifyFormlyFields() {
    this.fields = [
      {
        key: 'teste',
        type: 'nbCheckbox',
        templateOptions: {
          label: 'Teste Checkbox'
        }
      }
    ];
  }

  private defineInitialModelData() {
    this.model = {
      teste: false
    };
  }
}
