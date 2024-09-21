import CountDownController from '~/components/CountDownController'

const HomeDrawAwayNoBet = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Home/Draw/Away No Bet</div>

      <CountDownController />

      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-300 '>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                #
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Event
              </th>

              <th colSpan={2} className='py-2 text-center px-3 border border-foreground-400'>
                1st Ball
              </th>
              <th colSpan={2} className='py-2 text-center px-3 border border-foreground-400'>
                Last Ball
              </th>
              <th colSpan={3} className='py-2 text-center px-3 border border-foreground-400'>
                Next Ball
              </th>
              <th colSpan={4} className='py-2 text-center px-3 border border-foreground-400'>
                Next Combo
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                FT.O/E
              </th>
              <th rowSpan={1} colSpan={2} className='py-2 text-center px-3 border border-foreground-400'>
                Number Wheel
              </th>
            </tr>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center px-3 border border-foreground-400'>O/U</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>O/E</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>O/U</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>O/E</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>O/U</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>O/E</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Next R/B</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>O,O</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>U,O</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>O,E</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>U,E</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Live Game</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Pre Game</th>
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
    </div>
  )
}

export default HomeDrawAwayNoBet
