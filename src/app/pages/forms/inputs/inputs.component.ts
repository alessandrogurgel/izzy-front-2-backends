import { Component, OnInit, ViewChild } from '@angular/core';
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
    // custom css in typescript_code.scss
    this.htmlCode = `
    <pre><code class="lang-ts">[
      {
        key: <span class="hljs-symbol">'checked</span>',
        type: <span class="hljs-symbol">'nbCheckbox</span>',
        templateOptions: {
          label: <span class="hljs-symbol">'Checked</span>'
        }
      },
      {
        key: <span class="hljs-symbol">'basicInput</span>',
        type: <span class="hljs-symbol">'nbInput</span>',
        templateOptions: {
          label: <span class="hljs-symbol">'Basic</span> Input',
          required: true
        }
      },
      {
        key: <span class="hljs-symbol">'inputMask</span>',
        type: <span class="hljs-symbol">'nbInput</span>',
        templateOptions: {
          label: <span class="hljs-symbol">'Input</span> w/ mask',
          mask: <span class="hljs-string">"(00) 00000-0000"</span>,
          placeholder: <span class="hljs-string">"(00) 00000-0000"</span>
        }
      },
      {
        key: <span class="hljs-symbol">'minMaxInput</span>',
        type: <span class="hljs-symbol">'nbInput</span>',
        templateOptions: {
          label: <span class="hljs-symbol">'Input</span> w/ min max',
          type: <span class="hljs-symbol">'number</span>',
          min: <span class="hljs-number">0</span>,
          max: <span class="hljs-number">100</span>
        }
      },
      {
        key: <span class="hljs-symbol">'patternInput</span>',
        type: <span class="hljs-symbol">'nbInput</span>',
        templateOptions: {
          label: <span class="hljs-symbol">'Input</span> with pattern',
          placeholder: <span class="hljs-symbol">'Ex</span> @example.org',
          pattern: <span class="hljs-symbol">'.+@.+</span>\..+'
        }
      },
]<span class="hljs-comment">;</span>
</code></pre>

    `
  }


  private specifyFormlyFields() {
    this.fields = [
      {
        key: 'checked',
        type: 'nbCheckbox',
        templateOptions: {
          label: 'Checked'
        }
      },
      {
        key: 'basicInput',
        type: 'nbInput',
        templateOptions: {
          label: 'Basic Input',
          required: true
        }
      },
      {
        key: 'inputMask',
        type: 'nbInput',
        templateOptions: {
          label: 'Input w/ mask',
          mask: "(00) 00000-0000",
          placeholder: "(00) 00000-0000"
        }
      },
      {
        key: 'minMaxInput',
        type: 'nbInput',
        templateOptions: {
          label: 'Input w/ min max',
          type: 'number',
          min: 0,
          max: 100
        }
      },
      {
        key: 'patternInput',
        type: 'nbInput',
        templateOptions: {
          label: 'Input with pattern',
          placeholder: 'Ex @example.org',
          pattern: '.+@.+\..+'
        }
      },
    ];
  }

  private defineInitialModelData() {
    this.model = {
      teste: false
    };
  }
}
