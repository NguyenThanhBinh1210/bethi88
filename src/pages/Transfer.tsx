import { Checkbox, Chip, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import FilterController from '~/components/ViewLog/FilterController'
import { animals } from '~/constants/renaral.const'

const Transfer = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [value, setValue] = useState<string>('cat')
  const [valuePageSize, setValuePageSize] = useState<string>('10')

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }
  const handleSelectionPageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValuePageSize(e.target.value)
  }
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Multiple Transfer</div>
      <div className='flex gap-x-3 mb-2'>
        <Chip
          size='sm'
          endContent={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-4 text-green-600'
            >
              <path
                fillRule='evenodd'
                d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                clipRule='evenodd'
              />
            </svg>
          }
          variant='flat'
          className='bg-background rounded border  border-foreground-300'
        >
          <div className='font-medium text-xs'>09/21: Entered</div>
        </Chip>
        <Chip
          size='sm'
          endContent={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4 text-orange-700'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
            </svg>
          }
          variant='flat'
          className='bg-background rounded border  border-foreground-300'
        >
          <div className='font-medium gap-x-1 text-xs flex items-center'>
            09/21: Entered <div className='text-orange-700 bg-foreground-200 rounded-sm px-1 py-[1px] t'>11682</div>
          </div>
        </Chip>
      </div>
      <FilterController input select checkbox='All yesterday balance'></FilterController>
      <div className='flex items-center justify-between mt-4'>
        <Select
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          size='sm'
          isDisabled={!isSelected}
          color='primary'
          className='max-w-40  '
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Select
          selectedKeys={[valuePageSize]}
          onChange={handleSelectionPageSizeChange}
          size='sm'
          label='Page size'
          labelPlacement='outside-left'
          color='secondary'
          className='max-w-32'
        >
          {['10', '50', '100', '500'].map((number) => (
            <SelectItem key={number}>{number}</SelectItem>
          ))}
        </Select>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>#</th>
              <th className='py-2 text-center border border-foreground-400'>
                <Checkbox isSelected={isSelected} onValueChange={setIsSelected} radius={'sm'} size='sm'></Checkbox>
              </th>
              <th className='py-2 text-center border border-foreground-400'>Username</th>
              <th className='py-2 text-center border border-foreground-400'>Yesterday Balance</th>
              <th className='py-2 text-center border border-foreground-400'>Agent Cash</th>
              <th className='py-2 text-center border border-foreground-400'>Outstanding</th>
              <th className='py-2 text-center border border-foreground-400'>Given Credit</th>
              <th className='py-2 text-center border border-foreground-400'>Used Credit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={20}
                className='py-2 bg-background text-center dark:bg-foreground-100  border border-foreground-400'
              >
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transfer
