import CountDownController from '~/components/CountDownController'

const MoneyLine = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Money Line</div>

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

              <th colSpan={4} className='py-2 text-center px-3 border border-foreground-400'>
                Full Time
              </th>
              <th colSpan={4} className='py-2 text-center px-3 border border-foreground-400'>
                1st Half
              </th>
            </tr>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center px-3 border border-foreground-400'>Total Home</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Total Away</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Forecast Home</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Forecast Away</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Total Home</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Total Away</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Forecast Home</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Forecast Away</th>
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

export default MoneyLine
