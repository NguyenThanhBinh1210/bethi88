import { Button, Checkbox, Input, Switch } from '@nextui-org/react'

const TabSecurityCode = () => {
  return (
    <div className='grid md:grid-cols-2'>
      <div className='bg-white p-3 dark:bg-foreground-100 border border-foreground-200 rounded-md'>
        <Input
          className='mb-8'
          autoFocus
          labelPlacement='outside'
          label='Old Security Code'
          placeholder=' '
          variant='bordered'
        />
        <Input
          className='mb-8'
          labelPlacement='outside'
          label='New Security Code'
          placeholder=' '
          type='password'
          variant='bordered'
        />
        <Input
          className='mb-2'
          labelPlacement='outside'
          label='Confirm Security Code'
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
            Show security code
          </Checkbox>
        </div>
        <div className='flex gap-2'>
          <Button type='submit' className='mt-2' color='primary'>
            Submit
          </Button>
          <Button type='button' className='mt-2' color='warning'>
            Reset
          </Button>
        </div>
      </div>
      <div className='md:col-span-2 mt-3 text-sm space-y-1'>
        <p>
          Security Code must be a 6-digit number, contains at least 2 different digits and must not be consecutive
          numbers.
        </p>
        <p>- For example: 123456, 765432, 456789, etc. are NOT allowed. </p>
        <p className='font-medium'>
          Security Code will be asked once per session before performing the following actions
        </p>
        <p className='font-medium'>- Mandatory actions</p>
        <div className='ml-4 space-y-2'>
          <p>+ Create New Downline</p>
          <p>+ Position Taking Template</p>
          <p>+ Transfer</p>
          <p>+ Update downline's given credit and settings</p>
          <p>+ Update security information (password, security code, OTP, etc.)</p>
          <p>+ Update your sub account's information</p>
        </div>
        <p className='font-medium'>- Optional action</p>
        <div className='flex flex-col gap-2 py-2 ml-4'>
          <Switch size='sm' color='success'>
            Access to bet lists
          </Switch>
          <Switch size='sm' color='success'>
            Access to statement report
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default TabSecurityCode
