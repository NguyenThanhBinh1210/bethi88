import CountDownController from '~/components/CountDownController'

const FTHTTotalGoal = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Total Goal</div>

      <CountDownController />

      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-300 '>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                #
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Home
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Away
              </th>

              <th colSpan={4} className='py-2 text-center px-3 border border-foreground-400'>
                Full Time
              </th>
              <th colSpan={3} className='py-2 text-center px-3 border border-foreground-400'>
                1st Half
              </th>
            </tr>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center px-3 border border-foreground-400'>0-1</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>2-3</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>4-6</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>7&Over</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>0-1</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>2-3</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>4&Over</th>
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

export default FTHTTotalGoal
