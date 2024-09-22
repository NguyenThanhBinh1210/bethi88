import { Select, SelectItem } from '@nextui-org/react'
import { animals } from '~/constants/renaral.const'
import FilterDateRange from '../FilterDateRange'
import { useState } from 'react'

const BetCreditHistory = () => {
  const [value, setValue] = useState<string>('cat')

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <div className='flex gap-2 md:gap-6 flex-wrap'>
        <input
          type='text'
          className='border-2 bg-background border-foreground-200 text-xs py-[6.5px] rounded px-2'
          placeholder='Username'
        />
        <input
          type='text'
          className='border-2 bg-background border-foreground-200 text-xs py-[6.5px] rounded px-2'
          placeholder='Ref no'
        />

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
    </div>
  )
}

export default BetCreditHistory
