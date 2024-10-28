import { Input } from '@nextui-org/react'
import FilterDateRange from '../FilterDateRange'
import SingleSelection from '../SingleSelection'

const BetCreditHistory = () => {
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
  return (
    <div>
      <div className='flex gap-2 md:gap-6 flex-wrap'>
        <div className='flex gap-4'>
          <Input
            label='Member'
            labelPlacement='outside-left'
            type='text'
            size='sm'
            variant='bordered'
            placeholder='Username'
          />
          <Input label='Ref no' labelPlacement='outside-left' type='text' size='sm' variant='bordered' placeholder='' />
        </div>

        <FilterDateRange />
        <SingleSelection options={options} />
      </div>
    </div>
  )
}

export default BetCreditHistory
