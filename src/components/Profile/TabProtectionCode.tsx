import { Button, Checkbox, Input } from '@nextui-org/react'

const TabProtectionCode = () => {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='bg-white p-3 dark:bg-foreground-100 border border-foreground-200 rounded-md'>
        <Input
          className='mb-8'
          labelPlacement='outside'
          label='New Protection Code'
          placeholder=' '
          type='password'
          variant='bordered'
        />
        <Input
          className='mb-2'
          labelPlacement='outside'
          label='Confirm Protection Code'
          placeholder=' '
          type='password'
          variant='bordered'
        />
        <div className='flex py-2 px-1 justify-between'>
          <Checkbox
            classNames={{
              label: 'text-small'
            }}
          >
            Show Protection Code
          </Checkbox>
        </div>
        <div className='flex gap-2'>
          <Button type='submit' className='mt-2' color='primary'>
            Create
          </Button>
          <Button type='button' className='mt-2' color='warning'>
            Reset
          </Button>
        </div>
      </div>
      <div className='md:col-span-2 mt-3 text-sm space-y-1'>
        <p>
          {' '}
          Protection Code must be at least 6 characters, CAN be the same as your Security Code but CANNOT be the same as
          your Password.
        </p>
      </div>
    </div>
  )
}

export default TabProtectionCode
