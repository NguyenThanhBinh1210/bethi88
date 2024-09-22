import { Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import FilterDateRange from '~/components/FilterDateRange'
import { animals } from '~/constants/renaral.const'

const WinLossByProduct = () => {
  const [value, setValue] = useState<string>('cat')

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Win Loss By Product</div>
      <div className='flex gap-2 md:gap-6 flex-wrap'>
        <Select
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          size='sm'
          variant='bordered'
          className='max-w-40 !rounded bg-background'
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Select
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          size='sm'
          variant='bordered'
          className='max-w-40 !rounded bg-background'
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          ))}
        </Select>
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
            <tr className='bg-foreground-500 dark:bg-foreground-400 text-white'>
              <th rowSpan={2} className='py-2 text-center border dark:border-foreground-500'>
                Product/Bet Type
              </th>
              <th rowSpan={2} className='py-2 text-center border dark:border-foreground-500'>
                Bet Count
              </th>
              <th rowSpan={2} className='py-2 text-center border dark:border-foreground-500'>
                Turnover
              </th>
              <th rowSpan={2} className='py-2 text-center border dark:border-foreground-500'>
                Gross Comm
              </th>
              <th rowSpan={2} className='py-2 text-center border dark:border-foreground-500'>
                Agent Total
              </th>
              <th colSpan={3} className='py-2 text-center border dark:border-foreground-500'>
                Master
              </th>
              <th rowSpan={2} className='py-2 text-center border dark:border-foreground-500'>
                Company
              </th>
            </tr>
            <tr>
              <th className='py-2 text-center bg-foreground-600 dark:bg-foreground-200 text-white  border border-foreground-400'>
                Win/Loss
              </th>
              <th className='py-2 text-center bg-foreground-600 dark:bg-foreground-200 text-white  border border-foreground-400'>
                Comm
              </th>
              <th className='py-2 text-center bg-foreground-600 dark:bg-foreground-200 text-white  border border-foreground-400'>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={20} className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WinLossByProduct
