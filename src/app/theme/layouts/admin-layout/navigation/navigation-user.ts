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
  main?: boolean;
}

export const NavigationUserItems: NavigationItem[] = [
  // {
  //   id: 'dashboard',
  //   title: 'Dashboard',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'default',
  //       title: 'Setting',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/dashboard',
  //       icon: 'dashboard',
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  {
    id: 'profile',
    title: 'Setting',
    type: 'collapse',
    icon: 'user',
    children: [
      {
        id: 'profile',
        title: 'My Profile',
        type: 'item',
        classes: 'nav-item',
        url: '/my-profile',
        icon: 'user',
        breadcrumbs: false
      },
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
        id: 'change_password',
        title: 'Change Password',
        type: 'item',
        classes: 'nav-item',
        url: '/change-password',
        icon: 'ant-design',
        breadcrumbs: false
      }
    ]
  },
  // {
  //   id: 'pdf',
  //   title: 'PDF',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'pdf_plan',
  //       title: 'Plan PDF',
  //       type: 'item',
  //       classes: 'nav-item',
  //       icon: 'ant-design',
  //       url: '/plan-pdf',
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'ai_stake',
  //   title: 'AI Stake',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'ai_plan',
  //       title: 'AI Plan',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/packages',
  //       icon: 'ant-design',
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'ai_report',
  //       title: 'AI Plan Report',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/ai-plan-report',
  //       icon: 'wallet',
  //       breadcrumbs: false
  //     },
  //   ]
  // },
  {
    id: 'team',
    title: 'Network Team',
    type: 'collapse',
    icon: 'icon-navigation',
    children: [
      {
        id: 'direct_team',
        title: 'Direct Team',
        type: 'item',
        classes: 'nav-item',
        url: '/direct-team',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'leval_team',
        title: 'Leval Team',
        type: 'item',
        classes: 'nav-item',
        url: '/leval-team',
        icon: 'ant-design',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'income',
    title: 'Running Report',
    type: 'collapse',
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
    id: 'deposit_wallet',
    title: 'Deposit wallet',
    type: 'collapse',
    icon: 'icon-navigation',
    children: [
      {
        id: 'add_fund',
        title: 'Add Fund',
        type: 'item',
        classes: 'nav-item',
        url: '/fund',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'p2p_transfer',
        title: 'P2P Transfer',
        type: 'item',
        classes: 'nav-item',
        url: '/transfer',
        icon: 'ant-design',
        breadcrumbs: false
      },
      {
        id: 'transfer_deposit',
        title: 'Transfer to deposit wallet',
        type: 'item',
        classes: 'nav-item',
        url: '/transfer-deposit-wallet',
        icon: 'ant-design',
        breadcrumbs: false
      },
    ]
  },
  // {
  //   id: 'deposit_histey',
  //   title: 'Deposit/Credit Report',
  //   type: 'collapse',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'p2p_transfer_history',
  //       title: 'P2P Report',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/p2p-report',
  //       icon: 'ant-design',
  //       breadcrumbs: false
  //     }, {
  //       id: 'add_fund_history',
  //       title: 'Add Fund History',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/fund-history',
  //       icon: 'ant-design',
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'transfer_deposit_history',
  //       title: 'Deposit wallet Report',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: '/transfer-deposit-wallet-report',
  //       icon: 'ant-design',
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  {
    id: 'main_wallet',
    title: 'Activate ID',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ex_main_wallet',
        title: 'Activate ID',
        type: 'item',
        classes: 'nav-item',
        url: '/active-user',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'main_wallet',
    title: 'Payout',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ex_main_wallet',
        title: 'Main Wallet',
        type: 'item',
        classes: 'nav-item',
        url: '/main-wallet',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'withdrawal',
    title: 'Withdrawal',
    type: 'collapse',
    icon: 'wallet',
    children: [
      {
        id: 'withdrawal',
        title: 'Withdrawal',
        type: 'item',
        classes: 'nav-item',
        url: '/withdrawal',
        icon: 'wallet',
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
    id: 'payout',
    title: 'Payout',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ex_payout',
        title: 'Payout',
        type: 'item',
        classes: 'nav-item',
        url: '/payout',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ex_support',
        title: 'Support',
        type: 'item',
        classes: 'nav-item',
        url: '/support',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'chating',
    title: 'Exchange Chating',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'ex_chating',
        title: 'Exchange Chating',
        type: 'item',
        classes: 'nav-item',
        url: '/chating',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
];
