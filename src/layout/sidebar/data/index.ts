import {
  BookText,
  CalendarCheck2,
  CreditCard,
  Flag,
  FolderKanban,
  LayoutDashboard,
  ReceiptText,
  ScrollText,
  Users,
  WalletCards,
} from 'lucide-react'

export const SIDEBAR_DATA = [
  {
    items: [
      {
        Icon: LayoutDashboard,
        text: 'Dashboard',
        to: '/dashboard',
      },
    ],
  },
  {
    title: 'Project',
    items: [
      {
        Icon: BookText,
        text: 'Bids',
        to: '/bids',
      },
      {
        Icon: FolderKanban,
        text: 'Projects',
        to: '/projects',
      },
    ],
  },
  {
    title: 'Payments',
    items: [
      {
        Icon: WalletCards,
        text: 'Expenses',
        to: '/expenses',
        subLinks: [
          { to: '/expenses/homepage', title: 'Homepage' },
          { to: '/expenses/about', title: 'About' },
          { to: '/expenses/contact', title: 'Contact' },
        ],
      },
      {
        Icon: CreditCard,
        text: 'Payroll',
        to: '/payroll',
        subLinks: [
          { to: '/payroll/homepage', title: 'Homepage' },
          { to: '/payroll/about', title: 'About' },
          { to: '/payroll/contact', title: 'Contact' },
        ],
      },
    ],
  },
  {
    items: [
      {
        Icon: ReceiptText,
        text: 'Payables',
        to: '/Payables',
      },
    ],
  },
  {
    items: [
      {
        Icon: ScrollText,
        text: 'Script',
        to: '/script',
      },
      {
        Icon: CalendarCheck2,
        text: 'Scheduling',
        to: '/scheduling',
      },
      {
        Icon: Users,
        text: 'Team',
        to: '/team',
      },
      {
        Icon: Flag,
        text: 'Reports',
        to: '/reports',
      },
    ],
  },
]
