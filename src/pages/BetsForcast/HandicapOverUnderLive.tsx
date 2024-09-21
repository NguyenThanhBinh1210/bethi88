import { Tab, Tabs } from '@nextui-org/react'
import CountDownController from '~/components/CountDownController'

const HandicapOverUnderLive = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Handicap/Over Under/Live</div>

      <div className='flex w-full flex-col'>
        <Tabs aria-label='Options' variant='underlined'>
          <Tab key='Total Bets' title='Total Bets'>
            <CountDownController />

            <div className='w-full overflow-auto text-xs '>
              <table className='table-auto w-full border-collapse mt-4'>
                <thead>
                  <tr className='bg-foreground-300 '>
                    <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                      #
                    </th>
                    <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                      Time
                    </th>
                    <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                      Event
                    </th>

                    <th colSpan={2} className='py-2 text-center px-3 border border-foreground-400'>
                      Full Time
                    </th>
                    <th colSpan={2} className='py-2 text-center px-3 border border-foreground-400'>
                      1st Half
                    </th>
                  </tr>
                  <tr className='bg-foreground-500 text-white'>
                    <th className='py-2 text-center px-3 border border-foreground-400'>Handicap</th>
                    <th className='py-2 text-center px-3 border border-foreground-400'>Over/Under</th>
                    <th className='py-2 text-center px-3 border border-foreground-400'>Handicap</th>
                    <th className='py-2 text-center px-3 border border-foreground-400'>Over/Under</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={16} className='py-4 text-center bg-foreground-100  border border-foreground-400'>
                      No information is available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab key='Forecast' title='Forecast'>
            <CountDownController />

            <div className='w-full max-w-3xl text-xs '>
              <table className='table-auto w-full border-collapse mt-4'>
                <thead>
                  <tr className='bg-foreground-500 text-white'>
                    <th className='py-2 text-center border border-foreground-400'>Team</th>
                    <th className='py-2 text-center border border-foreground-400'>Handicap</th>
                    <th className='py-2 text-center border border-foreground-400'>Over/Under</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className='py-4 text-center bg-foreground-100  border border-foreground-400'>
                      No information is available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default HandicapOverUnderLive
