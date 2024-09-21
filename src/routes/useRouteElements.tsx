import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
import { AppContext } from '~/contexts/app.context'
import LoginLayout from '~/layouts/LoginLayout'
import Home from '~/pages/Home'
import { useContext } from 'react'
// import ManagerLayout from '~/layouts/ManagerLayout'
// import HomeLayout from '~/layouts/HomeLayout'
import ManagerLayout from '~/layouts/ManagerLayout'
import Profile from '~/pages/Profile'
import SecurityValidation from '~/pages/SecurityValidation'
import Notification from '~/pages/Notification'
import AgentOutstanding from '~/pages/Reports/AgentOutstanding'
import AgentWinLoss from '~/pages/Reports/AgentWinLoss'
import AgentWinLossDetail from '~/pages/Reports/AgentWinLossDetail'
import MatchWinLossDetail from '~/pages/Reports/MatchWinLossDetail'
import ViewLog from '~/pages/ViewLog'
import Soccer from '~/pages/BetsForcast/Soccer'
import HandicapOverUnderLive from '~/pages/BetsForcast/HandicapOverUnderLive'
import MoneyLine from '~/pages/BetsForcast/MoneyLine'
import OddEven1x2DND from '~/pages/BetsForcast/OddEven1x2DND'
import FTHTTotalGoal from '~/pages/BetsForcast/FTHTTotalGoal'
import Outright from '~/pages/BetsForcast/Outright'
import HTFT from '~/pages/BetsForcast/HTFT'
import FTHTFGLG from '~/pages/BetsForcast/FTHTFGLG'
import HomeDrawAwayNoBet from '~/pages/BetsForcast/HomeDrawAwayNoBet'
import NumberGame from '~/pages/BetsForcast/NumberGame'
import Page1X2 from '~/pages/BetsForcast/Page1X2'
import ScoreMap from '~/pages/BetsForcast/ScoreMap'

const useRouteElements = () => {
  function ProtecedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='login' />
  }
  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )
        },
        {
          path: 'register',
          element: (
            <LoginLayout>
              <Register />
            </LoginLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtecedRoute />,
      children: [
        {
          path: '/',
          index: true,
          element: (
            <ManagerLayout>
              <Home />
            </ManagerLayout>
          )
        },
        {
          path: '/profile',
          element: (
            <ManagerLayout>
              <Profile />
            </ManagerLayout>
          )
        },
        {
          path: '/security-code',
          element: (
            <ManagerLayout>
              <SecurityValidation />
            </ManagerLayout>
          )
        },
        {
          path: '/notification',
          element: (
            <ManagerLayout>
              <Notification />
            </ManagerLayout>
          )
        },
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
              <MatchWinLossDetail />
            </ManagerLayout>
          )
        },
        {
          path: '/view-log',
          element: (
            <ManagerLayout>
              <ViewLog />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/soccer',
          element: (
            <ManagerLayout>
              <Soccer />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/handicap-over-under-live',
          element: (
            <ManagerLayout>
              <HandicapOverUnderLive />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/money-line',
          element: (
            <ManagerLayout>
              <MoneyLine />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/odd-even-1x2-dnd',
          element: (
            <ManagerLayout>
              <OddEven1x2DND />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/ft-ht-total-goal',
          element: (
            <ManagerLayout>
              <FTHTTotalGoal />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/outright',
          element: (
            <ManagerLayout>
              <Outright />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/ht-ft',
          element: (
            <ManagerLayout>
              <HTFT />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/ft-ht-fg-lg',
          element: (
            <ManagerLayout>
              <FTHTFGLG />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/home-draw-away-no-bet',
          element: (
            <ManagerLayout>
              <HomeDrawAwayNoBet />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/number-game',
          element: (
            <ManagerLayout>
              <NumberGame />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/1X2',
          element: (
            <ManagerLayout>
              <Page1X2 />
            </ManagerLayout>
          )
        },
        {
          path: '/bets-forcast/score-map',
          element: (
            <ManagerLayout>
              <ScoreMap />
            </ManagerLayout>
          )
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
