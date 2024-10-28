import FilterDateRange from '~/components/FilterDateRange'
import SingleSelection from '~/components/SingleSelection'

const options = [
  {
    value: 'today',
    label: 'Today'
  },
  {
    value: 'yesterday',
    label: 'Yesterday'
  },
  {
    value: 'last_7_days',
    label: 'This Week'
  }
]
const CommissionByBetType = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Commission By Bet Type</div>
      <div className='flex gap-2 md:gap-6 flex-wrap'>
        <FilterDateRange />
        <SingleSelection options={options} />
      </div>
      <p className='text-xs mt-3'>
        <span className='text-red-500'>*</span> You can view the report data from 01/01/2021
      </p>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Username</th>
              <th className='py-2 text-center border border-foreground-400'>Commission 1</th>
              <th className='py-2 text-center border border-foreground-400'>Commission 2</th>
              <th className='py-2 text-center border border-foreground-400'>Commission 3</th>
              <th className='py-2 text-center border border-foreground-400'>Gaming</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={20} className='py-4 text-center bg-foreground-100  border border-foreground-400'>
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CommissionByBetType
