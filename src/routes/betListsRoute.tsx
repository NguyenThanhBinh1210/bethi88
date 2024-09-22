import ManagerLayout from '~/layouts/ManagerLayout'
import BothOneNeitherTeamToScore from '~/pages/BetLists/BothOneNeitherTeamToScore'
import CancelledBets from '~/pages/BetLists/CancelledBets'
import CleanSheet from '~/pages/BetLists/CleanSheet'
import CorrectScore from '~/pages/BetLists/CorrectScore'
import DoubleChance from '~/pages/BetLists/DoubleChance'
import Parlay from '~/pages/BetLists/Parlay'
import SearchTickets from '~/pages/BetLists/SearchTickets'
import ThreeWayHandicap from '~/pages/BetLists/ThreeWayHandicap'
import ToWinToNil from '~/pages/BetLists/ToWinToNil'

export const betListsRoute = [
  {
    path: '/bet-lists/search-tickets',
    element: (
      <ManagerLayout>
        <SearchTickets />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/cancelled-bets',
    element: (
      <ManagerLayout>
        <CancelledBets />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/correct-score',
    element: (
      <ManagerLayout>
        <CorrectScore />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/parlay',
    element: (
      <ManagerLayout>
        <Parlay />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/clean-sheet',
    element: (
      <ManagerLayout>
        <CleanSheet />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/double-chance',
    element: (
      <ManagerLayout>
        <DoubleChance />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/both-one-neither-team-to-score',
    element: (
      <ManagerLayout>
        <BothOneNeitherTeamToScore />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/to-win-to-nil',
    element: (
      <ManagerLayout>
        <ToWinToNil />
      </ManagerLayout>
    )
  },
  {
    path: '/bet-lists/3-way-hadicap',
    element: (
      <ManagerLayout>
        <ThreeWayHandicap />
      </ManagerLayout>
    )
  }
]
