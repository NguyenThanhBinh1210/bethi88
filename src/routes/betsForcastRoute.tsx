import ManagerLayout from '~/layouts/ManagerLayout'
import FTHTFGLG from '~/pages/BetsForcast/FTHTFGLG'
import FTHTTotalGoal from '~/pages/BetsForcast/FTHTTotalGoal'
import HandicapOverUnderLive from '~/pages/BetsForcast/HandicapOverUnderLive'
import HomeDrawAwayNoBet from '~/pages/BetsForcast/HomeDrawAwayNoBet'
import HTFT from '~/pages/BetsForcast/HTFT'
import MoneyLine from '~/pages/BetsForcast/MoneyLine'
import NumberGame from '~/pages/BetsForcast/NumberGame'
import OddEven1x2DND from '~/pages/BetsForcast/OddEven1x2DND'
import Outright from '~/pages/BetsForcast/Outright'
import Page1X2 from '~/pages/BetsForcast/Page1X2'
import ScoreMap from '~/pages/BetsForcast/ScoreMap'
import Soccer from '~/pages/BetsForcast/Soccer'

export const betsForcastRoute = [
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
