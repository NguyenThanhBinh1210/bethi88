import { Chip } from '@nextui-org/react'

const CreditBalance = () => {
  return (
    <div>
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
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Credit Balance</div>
    </div>
  )
}

export default CreditBalance
