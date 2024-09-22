import { Tab, Tabs } from '@nextui-org/react'
import BetCreditHistory from '~/components/BetCreditTracking/BetCreditHistory'
import MoveStatementHistory from '~/components/BetCreditTracking/MoveStatementHistory'

const BetCreditTracking = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' variant='underlined'>
        <Tab key='Bet Credit History' title='Bet Credit History'>
          <BetCreditHistory />
        </Tab>
        <Tab key='Move Statement History' title='Move Statement History'>
          <MoveStatementHistory />
        </Tab>
      </Tabs>
    </div>
  )
}

export default BetCreditTracking
