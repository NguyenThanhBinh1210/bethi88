import { Button } from '@nextui-org/react'
import SelectChecked from '~/components/SelectChecked'

const AgentOutstanding = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Agent Outstanding</div>
      <div className='flex items-center gap-4 mb-4'>
        <SelectChecked></SelectChecked>
        <Button color='primary' className='rounded'>
          Submit
        </Button>
      </div>
      <div className='w-full max-w-3xl text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          {/* Table Header */}
          <thead>
            <tr className='bg-foreground-300 '>
              <th rowSpan={2} colSpan={1} className='py-2 text-center border border-foreground-400'>
                Agent
              </th>
              <th colSpan={2} className='py-2 text-center border border-foreground-400'>
                Outstanding
              </th>
            </tr>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Member</th>
              <th className='py-2 text-center border border-foreground-400'>Master</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className='py-4 text-center bg-foreground-100  border border-foreground-400'>
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AgentOutstanding
