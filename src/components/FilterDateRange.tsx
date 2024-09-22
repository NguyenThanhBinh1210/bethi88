import { Button, DatePicker } from '@nextui-org/react'
import { useState } from 'react'
import { DateValue, parseDate } from '@internationalized/date'

const FilterDateRange = () => {
  const [valueFrom, setValueFrom] = useState<DateValue>(parseDate('2024-09-17'))
  const [valueTo, setValueTo] = useState<DateValue>(parseDate('2024-09-20'))
  return (
    <div className='flex gap-5  items-center '>
      <DatePicker
        size='sm'
        variant='bordered'
        label={'From'}
        className='max-w-[200px]'
        labelPlacement={'outside-left'}
        value={valueFrom}
        onChange={setValueFrom}
      />
      <DatePicker
        size='sm'
        variant='bordered'
        label={'To'}
        className='max-w-[200px]'
        labelPlacement={'outside-left'}
        value={valueTo}
        onChange={setValueTo}
      />
      <Button className='rounded' size='sm' color='primary'>
        Submit
      </Button>
    </div>
  )
}

export default FilterDateRange
