import { Button, Checkbox, DateRangePicker, Select, SelectItem } from '@nextui-org/react'
import { useState } from 'react'
import { animals } from '~/constants/renaral.const'
import { parseDate } from '@internationalized/date'
import React from 'react'
interface Props {
  select?: boolean
  input?: boolean
  dateRange?: boolean
  checkbox?: string
}
const FilterController = ({ select, input, dateRange, checkbox }: Props) => {
  const [value, setValue] = useState<string>('cat')

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }
  return (
    <div className='flex flex-wrap gap-3 md:gap-x-6'>
      {input && (
        <input
          placeholder='Username or First/Last Name'
          type='text'
          className='border-2 border-foreground-200 text-xs bg-background py-[6.5px] rounded px-2'
        />
      )}
      {select && (
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
      )}
      {dateRange && (
        <DateRangePicker
          size='sm'
          variant='bordered'
          className='max-w-52 bg-background'
          labelPlacement='outside'
          defaultValue={{
            start: parseDate('2024-04-01'),
            end: parseDate('2024-04-08')
          }}
        />
      )}
      <Button size='sm' color='primary' className='rounded'>
        Submit
      </Button>
      {checkbox && (
        <Checkbox size='sm' color='primary'>
          <div className='text-xs'>{checkbox}</div>
        </Checkbox>
      )}
    </div>
  )
}

export default FilterController
