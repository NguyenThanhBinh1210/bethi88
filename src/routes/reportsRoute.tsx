import ManagerLayout from '~/layouts/ManagerLayout'
import AgentOutstanding from '~/pages/Reports/AgentOutstanding'
import AgentWinLoss from '~/pages/Reports/AgentWinLoss'
import AgentWinLossDetail from '~/pages/Reports/AgentWinLossDetail'
import BetCreditTracking from '~/pages/Reports/BetCreditTracking'
import CommissionByBetType from '~/pages/Reports/CommissionByBetType'
import MatchWinLossDetail from '~/pages/Reports/MatchWinLossDetail'
import ProgressiveGamesContribution from '~/pages/Reports/ProgressiveGamesContribution'
import Results from '~/pages/Reports/Results'
import Statement from '~/pages/Reports/Statement'
import WinLossAnalysis from '~/pages/Reports/WinLossAnalysis'
import WinLossByProduct from '~/pages/Reports/WinLossByProduct'

export const reportsRoute = [
  {
    path: '/reports/agent-outstanding',
    element: (
      <ManagerLayout>
        <AgentOutstanding />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/agent-win-loss',
    element: (
      <ManagerLayout>
        <AgentWinLoss />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/agent-win-loss-detail',
    element: (
      <ManagerLayout>
        <AgentWinLossDetail />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/match-win-loss-detail',
    element: (
      <ManagerLayout>
        <MatchWinLossDetail />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/win-loss-analysis',
    element: (
      <ManagerLayout>
        <WinLossAnalysis />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/win-loss-by-product',
    element: (
      <ManagerLayout>
        <WinLossByProduct />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/commission-by-bet-type',
    element: (
      <ManagerLayout>
        <CommissionByBetType />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/statement',
    element: (
      <ManagerLayout>
        <Statement />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/results',
    element: (
      <ManagerLayout>
        <Results />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/progressive-games-contribution',
    element: (
      <ManagerLayout>
        <ProgressiveGamesContribution />
      </ManagerLayout>
    )
  },
  {
    path: '/reports/bet-credit-tracking',
    element: (
      <ManagerLayout>
        <BetCreditTracking />
      </ManagerLayout>
    )
  }
]
