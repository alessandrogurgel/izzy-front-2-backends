import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { GorestUsersService } from 'app/services/gorest-users.service';

@Component({
  selector: 'steppers',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.scss']
})
export class SteppersComponent implements OnInit {

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
    <pre><code class="lang-ts"> [
      {
        type: <span class="hljs-symbol">'nbStepper</span>',
        fieldGroup: [
          {
            templateOptions: {
              label: <span class="hljs-string">"Identificação"</span>
            },
            fieldGroup: [
              {
                key: <span class="hljs-symbol">'name</span>',
                type: <span class="hljs-symbol">'nbInput</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'Name</span>',
                  required: true
                }
              },
              {
                key: <span class="hljs-symbol">'email</span>',
                type: <span class="hljs-symbol">'nbInput</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'Emaill</span>',
                  required: true,
                  pattern: <span class="hljs-symbol">'.+@.+</span>\..+',
                  placeholder: <span class="hljs-string">"email@example.org"</span>
                }
              },
              {
                key: <span class="hljs-symbol">'documentValue</span>',
                type: <span class="hljs-symbol">'nbInput</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'CPF</span>',
                  required: true,
                  // pattern: /(\d){<span class="hljs-number">3</span>}\.(\d){<span class="hljs-number">3</span>}\.(\d){<span class="hljs-number">3</span>}-(\d){<span class="hljs-number">2</span>}/,
                  mask: <span class="hljs-string">"000.000.000-00"</span>,
                  placeholder: <span class="hljs-string">"000.000.000-00"</span>
                }
              },
            ]
          },
          {
            templateOptions: {
              label: <span class="hljs-string">"Endereço"</span>
            },
            fieldGroup: [
              {
                key: <span class="hljs-symbol">'cep</span>',
                type: <span class="hljs-symbol">'nbInput</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'CEP</span>',
                  required: true
                }
              },
              {
                key: <span class="hljs-symbol">'street</span>',
                type: <span class="hljs-symbol">'nbInput</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'Street</span>',
                  required: true
                }
              },
              {
                key: <span class="hljs-symbol">'state</span>',
                type: <span class="hljs-symbol">'nbSelect</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'State</span>',
                  options: [
                    { label: <span class="hljs-symbol">'Natal</span>', value: <span class="hljs-symbol">'natal</span>' },
                    { label: <span class="hljs-symbol">'Londres</span>', value: <span class="hljs-symbol">'londre</span>' }
                  ],
                  change: (<span class="hljs-name"><span class="hljs-builtin-name">field</span></span>, value) =&gt; {
                   this.model.state = value<span class="hljs-comment">;</span>
                  }
                }
              },
            ]
          },
          {
            templateOptions: {
              label: <span class="hljs-string">"Pagamento"</span>,
              click: (<span class="hljs-name">event</span>) =&gt; {
                alert(<span class="hljs-string">"form submiteed"</span>)<span class="hljs-comment">;</span>
                console.log(<span class="hljs-name">this.model</span>)<span class="hljs-comment">;</span>
              }
            },
            fieldGroup: [
              {
                key: <span class="hljs-symbol">'cardNumber</span>',
                type: <span class="hljs-symbol">'nbInput</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'Card</span> Number',
                  required: true
                }
              },
              {
                key: <span class="hljs-symbol">'holderName</span>',
                type: <span class="hljs-symbol">'nbInput</span>',
                templateOptions: {
                  label: <span class="hljs-symbol">'Holder</span> Name',
                  required: true
                }
              }
            ]
          }
        ]
      }
    ]<span class="hljs-comment">;</span>
</code></pre>


    `
  }


  private specifyFormlyFields() {
    this.fields = 
    [
      {
        type: 'nbStepper',
        fieldGroup: [
          {
            templateOptions: {
              label: "Identificação"
            },
            fieldGroup: [
              {
                key: 'name',
                type: 'nbInput',
                templateOptions: {
                  label: 'Name',
                  required: true
                }
              },
              {
                key: 'email',
                type: 'nbInput',
                templateOptions: {
                  label: 'Emaill',
                  required: true,
                  pattern: '.+@.+\..+',
                  placeholder: "email@example.org"
                }
              },
              {
                key: 'documentValue',
                type: 'nbInput',
                templateOptions: {
                  label: 'CPF',
                  required: true,
                  // pattern: /(\d){3}\.(\d){3}\.(\d){3}-(\d){2}/,
                  mask: "000.000.000-00",
                  placeholder: "000.000.000-00"
                }
              },
            ]
          },
          {
            templateOptions: {
              label: "Endereço"
            },
            fieldGroup: [
              {
                key: 'cep',
                type: 'nbInput',
                templateOptions: {
                  label: 'CEP',
                  required: true
                }
              },
              {
                key: 'street',
                type: 'nbInput',
                templateOptions: {
                  label: 'Street',
                  required: true
                }
              },
              {
                key: 'state',
                type: 'nbSelect',
                templateOptions: {
                  label: 'State',
                  options: [
                    { label: 'Natal', value: 'natal' },
                    { label: 'Londres', value: 'londre' }
                  ],
                  change: (field, value) => {
                   this.model.state = value;
                  }
                }
              },
            ]
          },
          {
            templateOptions: {
              label: "Pagamento",
              click: (event) => {
                alert("form submiteed");
                console.log(this.model);
              }
            },
            fieldGroup: [
              {
                key: 'cardNumber',
                type: 'nbInput',
                templateOptions: {
                  label: 'Card Number',
                  required: true
                }
              },
              {
                key: 'holderName',
                type: 'nbInput',
                templateOptions: {
                  label: 'Holder Name',
                  required: true
                }
              }
            ]
          }
        ]
      }
    ];
  }

  private defineInitialModelData() {
    this.model = {};
  }

  onSubmit(): void {
    alert("form submitted");
    console.log(this.model);
  }

}
