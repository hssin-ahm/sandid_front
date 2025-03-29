import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard',
  },

  {
    label: 'Browse',
    icon: 'book',
    link: '/dashboard',
  },
  {
    label: 'My tasks',
    icon: 'book',
    subMenus: [
      {
        subMenuItems: [
          {
            label: 'List',
            link: '/task/list',
          },
          {
            label: 'Add',
            link: '/task/add',
          },
        ],
      },
    ],
  },
  {
    label: 'Chat',
    icon: 'chat',
    link: '/dashboard',
  },
];
