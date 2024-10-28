/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, Input, Select, SelectItem } from '@nextui-org/react'
import SaveIcon from '~/components/icons/SaveIcon'
import { animals } from '~/constants/renaral.const'

const PositionTakingTemplate = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Position Taking Template</div>
      <div className='w-full max-w-3xl text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          {/* Table Header */}
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>#</th>
              <th className='py-2 text-center border border-foreground-400'>Template Name</th>
              <th className='py-2 text-center border border-foreground-400'>Master PT</th>
              <th className='py-2 text-center border border-foreground-400'>Select by Default</th>
              <th className='py-2 text-center border border-foreground-400'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='py-2 text-center bg-foreground-100  border border-foreground-400'></td>
              <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                <Input size='sm' variant='bordered'></Input>
              </td>
              <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                <Select
                  size='sm'
                  variant='bordered'
                  placeholder='Select event'
                  selectionMode='multiple'
                  className='items-center'
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value}>{animal.label}</SelectItem>
                  ))}
                </Select>
              </td>
              <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                <Checkbox size='sm'></Checkbox>
              </td>
              <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                <Button isIconOnly size='sm' variant='light'>
                  <SaveIcon className='size-6' />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PositionTakingTemplate
