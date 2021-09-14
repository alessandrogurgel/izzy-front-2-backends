import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'SAMPLE MINI APPLICATION',
    group: true,
  },
  {
    title: 'Companies',
    icon: 'briefcase-outline',
    link: '/pages/companies/'
  },
  {
    title: 'Users',
    icon: 'people-outline',
    link: '/pages/dashboard'
  },
  {
    title: 'Settings',
    icon: 'settings-2-outline',
    children: [
      {
        title: 'Permissions',
        link: '/pages/settings/permissions',
      },
      {
        title: 'Roles',
        link: '/pages/settigns/roles',
      }
    ],
  },
  {
    title: 'UI COMPONENTS',
    group: true,
  },
  {
    title: 'Ngx Formly UI',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Forms Inputs',
        link: '/pages/forms/inputs', // select, checkbox, textare
      },
      {
        title: 'Datepickers',
        link: '/pages/forms/datepickers',
      },
      {
        title: 'Steppers',
        link:  '/pages/forms/steppers',
      },
      {
        title: 'Panels',
        link:  '/pages/forms/panels',
      },
    ],
  },
  {
    title: 'Custom NgxDataTable',
    icon: 'grid-outline',
    children: [
      {
        title: 'Basic',
        link: '/pages/tables/basic',
      },
      {
        title: 'Mobile',
        link: '/pages/tables/mobile',
      }
    ],
  },
];
