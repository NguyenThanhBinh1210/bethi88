import { Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import FilterDateRange from '~/components/FilterDateRange'
import { animals } from '~/constants/renaral.const'

const Statement = () => {
  const [value, setValue] = useState<string>('cat')

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Statement</div>
      <div className='flex gap-2 md:gap-6 flex-wrap'>
        <FilterDateRange />
        <Select
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          size='sm'
          color='primary'
          className='max-w-40 !rounded bg-background'
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
      <p className='text-xs mt-3'>
        <span className='text-red-500'>*</span> You can view the report data from 01/01/2021
      </p>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Date</th>
              <th className='py-2 text-center border border-foreground-400'>Opening Balance</th>
              <th className='py-2 text-center border border-foreground-400'>Turnover</th>
              <th className='py-2 text-center border border-foreground-400'>Win/Loss</th>
              <th className='py-2 text-center border border-foreground-400'>Transfer Amt</th>
              <th className='py-2 text-center border border-foreground-400'>Accumulated Total</th>
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

export default Statement
