export const menuItems = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'web design',
        url: 'web-design'
      },
      {
        title: 'web development',
        url: 'web-dev',
        submenu: [
          {
            title: 'Frontend',
            url: 'frontend'
          },
          {
            title: 'Backend',
            submenu: [
              {
                title: 'NodeJS',
                url: 'node'
              },
              {
                title: 'PHP',
                url: 'php'
              }
            ]
          }
        ]
      },
      {
        title: 'SEO',
        url: 'seo'
      }
    ]
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are'
      },
      {
        title: 'Our values',
        url: 'our-values'
      }
    ]
  }
]
export const menuCMS = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
        />
      </svg>
    ),
    title: 'reports',
    subMenu: [
      {
        title: 'Agent Outstanding',
        path: '/products'
      },
      {
        title: 'Agent Win Loss',
        path: '/reviews'
      },
      {
        title: 'Agent Win Loss Detail',
        path: '/products'
      },
      {
        title: 'Match Win Loss Detail',
        path: '/reviews'
      },
      {
        title: 'Win Loss Analysis',
        path: '/products'
      },
      {
        title: 'Win Loss Analysis Chart',
        path: '/reviews'
      },
      {
        title: 'Win Loss By Product',
        path: '/products'
      },
      {
        title: 'Commission By Bet Type',
        path: '/reviews'
      },
      {
        title: 'Statement',
        path: '/products'
      },
      {
        title: 'Results',
        path: '/reviews'
      },
      {
        title: 'Progressive Games Contribution',
        path: '/products'
      },
      {
        title: 'Bet Credit Tracking',
        path: '/reviews'
      }
    ]
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        />
      </svg>
    ),
    title: 'MEMBER INFORMATION',
    subMenu: [
      {
        title: 'New Agent',
        path: '/products'
      },
      {
        title: 'Position Taking Template',
        path: '/reviews'
      },
      {
        title: 'Sub Account',
        path: '/products'
      },
      {
        title: 'Agent List',
        path: '/reviews'
      },
      {
        title: 'Problem Account List',
        path: '/products'
      },
      {
        title: 'Credit/Balance',
        path: '/reviews'
      },
      {
        title: 'Position Taking (%)',
        path: '/products'
      },
      {
        title: 'Member Commission',
        path: '/reviews'
      },
      {
        title: 'Indirect Login Account',
        path: '/products'
      },
      {
        title: 'Dormant Account List',
        path: '/reviews'
      }
    ]
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
        />
      </svg>
    ),
    title: 'Bet Lists',
    subMenu: [
      {
        title: 'Search Tickets',
        path: '/products'
      },
      {
        title: 'Cancelled Bets',
        path: '/reviews'
      },
      {
        title: 'Correct Score',
        path: '/products'
      },
      {
        title: 'Parlay',
        path: '/reviews'
      },
      {
        title: 'Clean Sheet',
        path: '/products'
      },
      {
        title: 'Double Chance',
        path: '/reviews'
      },
      {
        title: 'Both/One/Neither Team To Score',
        path: '/products'
      },
      {
        title: 'To Win To Nil',
        path: '/reviews'
      },
      {
        title: '3-Way Handicap',
        path: '/reviews'
      }
    ]
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605'
        />
      </svg>
    ),
    title: 'Bets & Forecast',
    subMenu: [
      {
        title: 'Soccer',
        path: '/products'
      },
      {
        title: 'Handicap/Over Under/Live',
        path: '/reviews'
      },
      {
        title: 'Money Line',
        path: '/reviews'
      },
      {
        title: 'Odd/Even + 1x2 + DND',
        path: '/reviews'
      },
      {
        title: 'FT & HT Total Goal',
        path: '/reviews'
      },
      {
        title: 'Outright',
        path: '/reviews'
      },
      {
        title: 'HT/FT',
        path: '/reviews'
      },
      {
        title: 'FT & HT FG/LG',
        path: '/reviews'
      },
      {
        title: 'Home/Draw/Away No Bet',
        path: '/reviews'
      },
      {
        title: 'Number Game',
        path: '/reviews'
      },
      {
        title: '1X2',
        path: '/reviews'
      },
      {
        title: 'Score Map',
        path: '/reviews'
      }
    ]
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
        />
      </svg>
    ),
    title: 'Transfer',
    path: 'dashboard'
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
        />
      </svg>
    ),
    title: 'View log',
    subMenu: [
      {
        title: 'Setting',
        path: '/products'
      },
      {
        title: 'Status',
        path: '/reviews'
      },
      {
        title: 'Credit',
        path: '/products'
      },
      {
        title: 'Login',
        path: '/reviews'
      }
    ]
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
        />
      </svg>
    ),
    title: 'Announcements',
    subMenu: [
      {
        title: 'Normal',
        path: '/products'
      },
      {
        title: 'Special',
        path: '/reviews'
      },
      {
        title: 'System',
        path: '/products'
      },
      {
        title: 'Personal Message',
        path: '/reviews'
      }
    ]
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z'
        />
      </svg>
    ),
    title: 'Risk Management',
    subMenu: [
      {
        title: 'Member Win/Loss Limit',
        path: '/products'
      },
      {
        title: 'My Thresholds',
        path: '/reviews'
      }
    ]
  }
]
