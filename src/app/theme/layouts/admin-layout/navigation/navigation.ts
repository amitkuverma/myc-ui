export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
  main?:boolean;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Master management',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'users',
    title: 'Users',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'userList',
        title: 'All Users Details',
        type: 'item',
        classes: 'nav-item',
        url: '/users',
        icon: 'user',
        breadcrumbs: false
      },
      {
        id: 'change_password',
        title: 'Change Password',
        type: 'item',
        classes: 'nav-item',
        url: '/change-password',
        icon: 'ant-design',
        breadcrumbs: false
      },
      // {
      //   id: 'today_joining',
      //   title: 'Today Joining',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/today-joining',
      //   icon: 'ant-design',
      //   breadcrumbs: false
      // },
      // {
      //   id: 'today_ai_trade',
      //   title: 'Today AI Trade',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/ai-trade',
      //   icon: 'ant-design',
      //   breadcrumbs: false
      // },      
      // {
      //   id: 'ai_trade_report',
      //   title: 'AI Plan Report',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/ai-plan-report',
      //   icon: 'ant-design',
      //   breadcrumbs: false
      // },      
      // {
      //   id: 'daily_report',
      //   title: 'Daily Earning',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/daily-report',
      //   icon: 'wallet',
      //   breadcrumbs: false
      // },
      // {
      //   id: 'one_time_report',
      //   title: 'One Time Earning',
      //   type: 'item',
      //   classes: 'nav-item',
      //   url: '/one-time-earning',
      //   icon: 'wallet',
      //   breadcrumbs: false
      // },
    ]
  },
  {
    id: 'crypto',
    title: 'Account',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'crypto_address',
        title: 'Manage Account',
        type: 'item',
        classes: 'nav-item',
        url: '/my-crypto',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'cryptoList',
        title: 'Users Crypto',
        type: 'item',
        classes: 'nav-item',
        url: '/uses-crypto',
        icon: 'wallet',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'withdrawal',
    title: 'Withdrawal',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'withdrawal',
        title: 'Withdrawal User Request',
        type: 'item',
        classes: 'nav-item',
        url: '/withdrawals',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'withdrawal-history',
        title: 'Withdrawal User Report',
        type: 'item',
        classes: 'nav-item',
        url: '/withdrawal-history',
        icon: 'wallet',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'deposit_wallet',
    title: 'Deposit wallet',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'add_funds',
        title: 'Add Fund Request',
        type: 'item',
        classes: 'nav-item',
        url: '/funds',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'add_funds_history',
        title: 'Add Fund Report',
        type: 'item',
        classes: 'nav-item',
        url: '/fund-history',
        icon: 'ant-design',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'income',
    title: 'Income Report',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ai_report',
        title: 'Video rank income',
        type: 'item',
        classes: 'nav-item',
        url: '/ai-trade',
        icon: 'wallet',
        breadcrumbs: false
      },
      {
        id: 'daily_report',
        title: 'Promoter',
        type: 'item',
        classes: 'nav-item',
        url: '/daily-report',
        icon: 'wallet',
        breadcrumbs: false
      },
      {
        id: 'one_time_report',
        title: ' Financer club',
        type: 'item',
        classes: 'nav-item',
        url: '/one-time-earning',
        icon: 'wallet',
        breadcrumbs: false
      },
      {
        id: 'leadership_report',
        title: 'Apline income',
        type: 'item',
        classes: 'nav-item',
        url: '/leadership-report',
        icon: 'wallet',
        breadcrumbs: false
      },
      {
        id: 'royalty_report',
        title: 'Reward',
        type: 'item',
        classes: 'nav-item',
        url: '/royalty-report',
        icon: 'wallet',
        breadcrumbs: false
      },
      {
        id: 'star_report',
        title: 'Bonanza gift',
        type: 'item',
        classes: 'nav-item',
        url: '/star-report',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'super_report',
        title: 'Monthly gift',
        type: 'item',
        classes: 'nav-item',
        url: '/super-rewards',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'super_report',
        title: 'Total income',
        type: 'item',
        classes: 'nav-item',
        url: '/total-rewards',
        icon: 'ant-design',
        breadcrumbs: false
      },
    ]
  },
  {
    id: 'deposit_histey',
    title: 'Deposit/Credit Report',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'transfer_deposit_history',
        title: 'Deposit wallet Report',
        type: 'item',
        classes: 'nav-item',
        url: '/transfer-deposit-wallet-report',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'fund_credit',
        title: 'Fund Credit/Debit',
        type: 'item',
        classes: 'nav-item',
        url: '/fund-deposit',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'earn_wallet',
        title: 'Earn Wallet Report',
        type: 'item',
        classes: 'nav-item',
        url: '/earn-wallet',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'deposit_wallet',
        title: 'Deposit Wallet Report',
        type: 'item',
        classes: 'nav-item',
        url: '/deposit-wallet',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'turnover',
        title: 'Total Turnover Report',
        type: 'item',
        classes: 'nav-item',
        url: '/total-turnover',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'p2p_report',
        title: 'P2P Report',
        type: 'item',
        classes: 'nav-item',
        url: '/p2p-report',
        icon: 'ant-design',
        breadcrumbs: false
      }
    ]
  }
];
