export const animals = [
  { label: 'Cat', value: 'cat', description: 'The second most popular pet in the world' },
  { label: 'Dog', value: 'dog', description: 'The most popular pet in the world' },
  { label: 'Elephant', value: 'elephant', description: 'The largest land animal' },
  { label: 'Lion', value: 'lion', description: 'The king of the jungle' },
  { label: 'Tiger', value: 'tiger', description: 'The largest cat species' },
  { label: 'Giraffe', value: 'giraffe', description: 'The tallest land animal' },
  {
    label: 'Dolphin',
    value: 'dolphin',
    description: 'A widely distributed and diverse group of aquatic mammals'
  },
  { label: 'Penguin', value: 'penguin', description: 'A group of aquatic flightless birds' },
  { label: 'Zebra', value: 'zebra', description: 'A several species of African equids' },
  {
    label: 'Shark',
    value: 'shark',
    description: 'A group of elasmobranch fish characterized by a cartilaginous skeleton'
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
        path: '/reports/agent-outstanding'
      },
      {
        title: 'Agent Win Loss',
        path: '/reports/agent-win-loss'
      },
      {
        title: 'Agent Win Loss Detail',
        path: '/reports/agent-win-loss-detail'
      },
      {
        title: 'Match Win Loss Detail',
        path: '/reports/match-win-loss-detail'
      },
      {
        title: 'Win Loss Analysis',
        path: '/reports/win-loss-analysis'
      },
      {
        title: 'Win Loss Analysis Chart',
        path: '/reviews'
      },
      {
        title: 'Win Loss By Product',
        path: '/reports/win-loss-by-product'
      },
      {
        title: 'Commission By Bet Type',
        path: '/reports/commission-by-bet-type'
      },
      {
        title: 'Statement',
        path: '/reports/statement'
      },
      {
        title: 'Results',
        path: '/reports/results'
      },
      {
        title: 'Progressive Games Contribution',
        path: '/reports/progressive-games-contribution'
      },
      {
        title: 'Bet Credit Tracking',
        path: '/reports/bet-credit-tracking'
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
        path: '/bet-lists/search-tickets'
      },
      {
        title: 'Cancelled Bets',
        path: '/bet-lists/cancelled-bets'
      },
      {
        title: 'Correct Score',
        path: '/bet-lists/correct-score'
      },
      {
        title: 'Parlay',
        path: '/bet-lists/parlay'
      },
      {
        title: 'Clean Sheet',
        path: '/bet-lists/clean-sheet'
      },
      {
        title: 'Double Chance',
        path: '/bet-lists/double-chance'
      },
      {
        title: 'Both/One/Neither Team To Score',
        path: '/bet-lists/both-one-neither-team-to-score'
      },
      {
        title: 'To Win To Nil',
        path: '/bet-lists/to-win-to-nil'
      },
      {
        title: '3-Way Handicap',
        path: '/bet-lists/3-way-hadicap'
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
        path: '/bets-forcast/soccer'
      },
      {
        title: 'Handicap/Over Under/Live',
        path: '/bets-forcast/handicap-over-under-live'
      },
      {
        title: 'Money Line',
        path: '/bets-forcast/money-line'
      },
      {
        title: 'Odd/Even + 1x2 + DND',
        path: '/bets-forcast/odd-even-1x2-dnd'
      },
      {
        title: 'FT & HT Total Goal',
        path: '/bets-forcast/ft-ht-total-goal'
      },
      {
        title: 'Outright',
        path: '/bets-forcast/outright'
      },
      {
        title: 'HT/FT',
        path: '/bets-forcast/ht-ft'
      },
      {
        title: 'FT & HT FG/LG',
        path: '/bets-forcast/ft-ht-fg-lg'
      },
      {
        title: 'Home/Draw/Away No Bet',
        path: '/bets-forcast/home-draw-away-no-bet'
      },
      {
        title: 'Number Game',
        path: '/bets-forcast/number-game'
      },
      {
        title: '1X2',
        path: '/bets-forcast/1x2'
      },
      {
        title: 'Score Map',
        path: '/bets-forcast/score-map'
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
    path: 'transfer'
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
    path: 'view-log'
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
    path: 'notification'
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
        path: '/risk-management/member-win-loss-limit'
      },
      {
        title: 'My Thresholds',
        path: '/risk-management/my-thresholds'
      }
    ]
  }
]
