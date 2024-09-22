import FilterDateRange from '~/components/FilterDateRange'
import SelectChecked from '~/components/SelectChecked'

const ProgressiveGamesContribution = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>
        Progressive Games Contribution
      </div>
      <div className='flex items-center gap-2 md:gap-6 mb-4 flex-wrap'>
        <SelectChecked />
        <FilterDateRange />
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-300 '>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Product/Bet Type
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Turnover
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Contribution Amount
              </th>

              <th colSpan={2} className='py-2 text-center px-3 border border-foreground-400'>
                Contribution Share
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Company
              </th>
            </tr>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center px-3 border border-foreground-400'>Master</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={13} className='py-4 text-center bg-foreground-100  border border-foreground-400'>
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProgressiveGamesContribution
