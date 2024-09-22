import { Button, DateRangePicker, Input } from '@nextui-org/react'

const MoveStatementHistory = () => {
  return (
    <div>
      <div className='flex gap-2 md:gap-6 flex-wrap'>
        <Input
          className='w-max'
          size='sm'
          variant='bordered'
          placeholder='Username'
          labelPlacement='outside-left'
          label='Member'
        ></Input>
        <div>
          <DateRangePicker
            className='w-max'
            variant='bordered'
            size='sm'
            label='Date'
            labelPlacement='outside-left'
          ></DateRangePicker>
        </div>
        <Button className='rounded' size='sm' color='primary'>
          Submit
        </Button>
      </div>
      <div className='text-xs mt-2'>You can view the report data from 06/01/2024.</div>
      <div className='text-xs mt-2'>
        The report will show all tickets which have old/new event date falling in the searched date range.
      </div>
      <div className='mt-4 xl:w-[70%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 '>
        <div className='border rounded p-1 text-xs bg-blue-100 border-blue-200'>
          <div className='text-blue-600 bg-blue-200 rounded font-medium text-center h-12 flex items-center justify-center flex  py-2'>
            Total Members
          </div>
          <div className='text-center py-2 font-medium'>0</div>
        </div>
        <div className='border rounded p-1 text-xs bg-blue-100 border-blue-200'>
          <div className='text-blue-600 bg-blue-200 rounded font-medium text-center h-12 flex items-center justify-center flex  py-2'>
            Total Win/Loss
          </div>
          <div className='text-center py-2 font-medium'>0.00</div>
        </div>
        <div className='border rounded p-1 text-xs bg-blue-100 border-blue-200'>
          <div className='text-blue-600 bg-blue-200 rounded font-medium text-center h-12 flex items-center justify-center flex  py-2'>
            Total Commission
          </div>
          <div className='text-center py-2 font-medium'>0.00</div>
        </div>
        <div className='border rounded p-1 text-xs bg-blue-100 border-blue-200'>
          <div className='text-blue-600 bg-blue-200 rounded font-medium text-center h-12 flex items-center justify-center flex  py-2'>
            Total
          </div>
          <div className='text-center py-2 font-medium'>0.00</div>
        </div>
        <div className='border rounded p-1 text-xs bg-orange-100 border-orange-200'>
          <div className='text-orange-600 bg-orange-200 rounded font-medium text-center h-12 flex items-center justify-center flex  py-2'>
            Variance from Selected Date
          </div>
          <div className='text-center py-2 font-medium'>0.00</div>
        </div>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Member/Ref No.</th>
              <th className='py-2 text-center border border-foreground-400'>Old Event Date</th>
              <th className='py-2 text-center border border-foreground-400'>New Event Date</th>
              <th className='py-2 text-center border border-foreground-400'>Member Win/Loss</th>
              <th className='py-2 text-center border border-foreground-400'>Member Comm</th>
              <th className='py-2 text-center border border-foreground-400'>Member Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-background'>
              <td colSpan={20} className='py-2 text-center   border border-foreground-400'>
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MoveStatementHistory
