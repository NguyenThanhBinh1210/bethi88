import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
import { AppContext } from '~/contexts/app.context'
import LoginLayout from '~/layouts/LoginLayout'
import Home from '~/pages/Home'
import { useContext } from 'react'
import ManagerLayout from '~/layouts/ManagerLayout'
import Profile from '~/pages/Profile'
import SecurityValidation from '~/pages/SecurityValidation'
import Notification from '~/pages/Notification'
import ViewLog from '~/pages/ViewLog'
import { reportsRoute } from './reportsRoute'
import { betsForcastRoute } from './betsForcastRoute'
import { betListsRoute } from './betListsRoute'
import Telegram from '~/pages/Telegram'
import AvailableDomains from '~/pages/AvailableDomains'
import { riskManagementRoute } from './riskManagementRoute'
import Transfer from '~/pages/Transfer'

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
          path: '/view-log',
          element: (
            <ManagerLayout>
              <ViewLog />
            </ManagerLayout>
          )
        },
        {
          path: '/telegram',
          element: (
            <ManagerLayout>
              <Telegram />
            </ManagerLayout>
          )
        },
        {
          path: '/available-domains',
          element: (
            <ManagerLayout>
              <AvailableDomains />
            </ManagerLayout>
          )
        },
        {
          path: '/transfer',
          element: (
            <ManagerLayout>
              <Transfer />
            </ManagerLayout>
          )
        },
        ...reportsRoute,
        ...betsForcastRoute,
        ...betListsRoute,
        ...riskManagementRoute
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
