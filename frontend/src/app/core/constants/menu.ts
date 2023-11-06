import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard/home',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Ruangan',
          route: '/dashboard/room',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Users',
          route: '/dashboard/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Tipe Ruangan',
          route: '/dashboard/room-type',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Biaya Tambahan',
          route: '/dashboard/additional-fee',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Transaksi',
          route: '/dashboard/transactions',
        },
        
      ],
    },
    
  ];
}
