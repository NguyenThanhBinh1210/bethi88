import { Button } from '@nextui-org/react'

const SearchTickets = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Search Tickets</div>
      <div className='flex items-end gap-2'>
        <div className='flex flex-col gap-1 text-xs'>
          <label htmlFor='idref'>
            Ref no <span className='text-red-500'>*</span>
          </label>
          <input
            id='idref'
            type='text'
            className='rounded bg-background border border-foreground-300 text-xs py-[7px] px-2'
          />
        </div>
        <Button className='!py-0' size='sm' color='primary'>
          Submit
        </Button>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Member</th>
              <th className='py-2 text-center border border-foreground-400'>Trans.Time</th>
              <th className='py-2 text-center border border-foreground-400'>Choice</th>
              <th className='py-2 text-center border border-foreground-400'>Odds</th>
              <th className='py-2 text-center border border-foreground-400'>Stake</th>
              <th className='py-2 text-center border border-foreground-400'>Win Loss</th>
              <th className='py-2 text-center border border-foreground-400'>Status</th>
              <th className='py-2 text-center border border-foreground-400'>Master PT/ Comm</th>
              <th className='py-2 text-center border border-foreground-400'>Agent PT/ Comm</th>
              <th className='py-2 text-center border border-foreground-400'>Platform</th>
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

export default SearchTickets
