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
        icon: <LayoutDashboard />,
        text: 'Dashboard',
        to: '/dashboard',
      },
    ],
  },
  {
    title: 'Project',
    items: [
      {
        icon: <BookText />,
        text: 'Bids',
        to: '/bids',
      },
      {
        icon: <FolderKanban />,
        text: 'Projects',
        to: '/projects',
      },
    ],
  },
  {
    title: 'Payments',
    items: [
      {
        icon: <WalletCards />,
        text: 'Expenses',
        to: '/expenses',
        subLinks: [
          { to: '/expenses/homepage', title: 'Homepage' },
          { to: '/expenses/about', title: 'About' },
          { to: '/expenses/contact', title: 'Contact' },
        ],
      },
      {
        icon: <CreditCard />,
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
        icon: <ReceiptText />,
        text: 'Payables',
        to: '/Payables',
      },
    ],
  },
  {
    items: [
      {
        icon: <ScrollText />,
        text: 'Script',
        to: '/script',
      },
      {
        icon: <CalendarCheck2 />,
        text: 'Scheduling',
        to: '/scheduling',
      },
      {
        icon: <Users />,
        text: 'Team',
        to: '/team',
      },
      {
        icon: <Flag />,
        text: 'Reports',
        to: '/reports',
      },
    ],
  },
]
