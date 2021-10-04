# izzy-front-2-backends [<img src="https://i.imgur.com/oMcxwZ0.png" alt="Eva Design System" height="20px" />](https://eva.design?utm_campaign=eva_design%20-%20home%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=top_status_tile)


### Dependencies
- This project was originally created from the template [ngx-admin](https://github.com/akveo/ngx-admin). [Template Documentation](https://akveo.github.io/ngx-admin/docs/getting-started/what-is-ngxadmin?utm_campaign=ngx_admin%20-%20home%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin&utm_medium=referral&utm_content=github_readme_installation_guidelines).
- It also uses [nebular-formly](https://www.npmjs.com/package/nebular-formly) which is an angular package that provides [Nebular](https://github.com/akveo/nebular) based components to be used in [Formly](https://github.com/ngx-formly/ngx-formly) forms. In a nutshell, Nebular is a set of Angular components that follows [Eva Design Pattern](https://eva.design/). Formly is a angular library taht supports the dynamic configuration of forms. It provide several features to make it easy to create complex and configurable forms based on javascript objects.
- [ngx-databable](https://github.com/swimlane/ngx-datatable) is an Angular component  tailored for supports the creating of custom tables from large and complex data.

### Motivation and Goals

The large number and variety of javascript frameworks and templates sometimes make difficult
to create stable front-end admin-web-based projects which share good design practices, architecture guidelines, reusable components and modules.
It is even harder when your team is composed only by backend developers with zero to little experience in modern javascript frameworks/libraries such as Angular, React and VueJS.

Other motivation is to create a set of component that have as major design intentions: easy extension and configuration. In this way we can scale up our development in large projects.

The goal is to provide an easy way to bootstrap an admin template enhanced some features such as: (i) the use of nebular-formly which
allows us to quickly create forms based on simple configuration and (ii) components based on ngx-datatable to easy setup list pages. 

We choose **Angular** because it provides a great bounded solution. We are using **Nebular** as it open-source and very stable. It is used in several production applications.
We decided to use **Formly** as it is being maintained for years and it is very stable. Finally,
this project is developed with the **nebular-formly** which it make easier to use Nebular and Formly.  

### Features

 It provides us with demo pages of some Nebular-Formly component and some utility components.
 
- Nebular-Formly Input Forms.
- Nebular-Formly Datepickers.
- Nebular-Formly Steppers.
- Nebular-Formly Panels.
- Debug component to show form-value javascript objects.
- Panel to exhibit typescript code.

### Installation and Running

- Install node modules.
```
npm install
```
- Run it locally.
```
npm run start
```
- Create a dist.
```
npm run build 
or 
npm run build:prod
```
- Use http-server to test the dist version locally
```
http-server dist/
```
- In the login page, use a BR user or a MX user (In a near feature we are going to provide multi-language support) to Log in.
```
 email: 'admin@example.com.br', password: 'adminbr'
 or
 email: 'admin@example.com.mx', password: 'adminmx'
```

### Next Steps

- Support to several locales (adapt nebular-formly).
- Provide ngx-datable based pages.
- Make a demo page available.
- Create CLI features to easy setup new Form pages and new List pages.
