import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { animals } from '~/constants/renaral.const'

const DormantAccountList = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Dormant Account List</div>
      <div className='flex gap-3 flex-wrap items-center'>
        <div>
          <Input size='sm' variant='bordered' placeholder='Username' />
        </div>
        <div>
          <Select
            size='sm'
            variant='bordered'
            placeholder='Level'
            selectionMode='multiple'
            className='items-center min-w-[150px]'
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <Select
            size='sm'
            variant='bordered'
            placeholder='Status'
            selectionMode='multiple'
            className='items-center min-w-[150px]'
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
        <Button size='sm' color='primary'>
          Submit
        </Button>
      </div>
      <div className='w-full  text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          {/* Table Header */}
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Username</th>
              <th className='py-2 text-center border border-foreground-400'>Level</th>
              <th className='py-2 text-center border border-foreground-400'>Status</th>
              <th className='py-2 text-center border border-foreground-400'>Archive Stage</th>
              <th className='py-2 text-center border border-foreground-400'>To Be Cleared Given Credit</th>
              <th className='py-2 text-center border border-foreground-400'>Cleared Given Credit</th>
              <th className='py-2 text-center border border-foreground-400'>Yesterday Balance</th>
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

export default DormantAccountList
