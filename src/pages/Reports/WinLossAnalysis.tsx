import { Button, DateRangePicker } from '@nextui-org/react'
import { parseDate } from '@internationalized/date'

import SelectChecked from '~/components/SelectChecked'
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
  },
  {
    value: 'last_30_days',
    label: 'This Month'
  },
  {
    value: 'last_90_days',
    label: 'This Quarter'
  },
  {
    value: 'last_year',
    label: 'Last Year'
  }
]
const WinLossAnalysis = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Win Loss Analysis</div>
      <div className='flex gap-2 md:gap-6 mb-4 flex-wrap'>
        <div>
          <p className='font-medium text-xs mb-2'>Product</p>
          <SelectChecked />
        </div>
        <DateRangePicker
          size='sm'
          variant='bordered'
          className='max-w-52'
          labelPlacement='outside'
          defaultValue={{
            start: parseDate('2024-04-01'),
            end: parseDate('2024-04-08')
          }}
          label={<div className='font-medium text-xs'>Date Range</div>}
        />

        <Button size='sm' variant='solid' color='primary' className='mt-auto'>
          Submit
        </Button>
        <SingleSelection classNames={{ trigger: 'mt-auto' }} options={options} />
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-300 '>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Daily
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Bet Count
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Turnover
              </th>

              <th colSpan={3} className='py-2 text-center px-3 border border-foreground-400'>
                Member
              </th>
              <th colSpan={3} className='py-2 text-center px-3 border border-foreground-400'>
                Agent
              </th>
              <th colSpan={3} className='py-2 text-center px-3 border border-foreground-400'>
                Master
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Company
              </th>
            </tr>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center px-3 border border-foreground-400'>Win/Loss</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Comm</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Total</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Win/Loss</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Comm</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Total</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Win/Loss</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Comm</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Total</th>
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

export default WinLossAnalysis
