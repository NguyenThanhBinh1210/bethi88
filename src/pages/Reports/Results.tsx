import { Tab, Tabs } from '@nextui-org/react'
import Normal from '~/components/Results/Normal'
import RNGKeno from '~/components/Results/RNGKeno'
import Lottery from '~/components/Results/Lottery'
import VirtualGames from '~/components/Results/VirtualGames'
import TableGame from '~/components/Results/TableGame'
import Outright from '~/components/Results/Outright'

const Results = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' variant='underlined'>
        <Tab key='Normal' title='Normal'>
          <Normal />
        </Tab>
        <Tab key='Outright' title='Outright'>
          <Outright />
        </Tab>
        <Tab key='RNGKeno' title='RNGKeno'>
          <RNGKeno />
        </Tab>
        <Tab key='Lottery' title='Lottery'>
          <Lottery />
        </Tab>
        <Tab key='VirtualGames' title='VirtualGames'>
          <VirtualGames />
        </Tab>
        <Tab key='TableGame' title='TableGame'>
          <TableGame />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Results
