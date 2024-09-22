import { Button, Checkbox, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import FilterDateRange from '~/components/FilterDateRange'
import BaseModal from '~/components/modals/BaseModal'

const MyThresholds = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <div>
        <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>My Thresholds</div>
        <div className=' flex items-center gap-3 flex-wrap'>
          <FilterDateRange></FilterDateRange>
          <Button onPress={onOpen} className='rounded' size='sm' color='warning'>
            My Thresholds
          </Button>
        </div>
        <div className='text-xs mt-4'>
          <span className='text-red-500'>*</span> My Winning Threshold: <span className='text-red-500'>Unlimited</span>{' '}
          ; My Losing Threshold: <span className='text-red-500'>Unlimited</span>
        </div>
        <div className='w-full overflow-auto text-xs '>
          <table className='table-auto w-full border-collapse mt-4'>
            <thead>
              <tr className='bg-foreground-500 text-white'>
                <th className='py-2 text-center border border-foreground-400'>No.</th>
                <th className='py-2 text-center border border-foreground-400'>Status</th>
                <th className='py-2 text-center border border-foreground-400'>Username</th>
                <th className='py-2 text-center border border-foreground-400'>First Name</th>
                <th className='py-2 text-center border border-foreground-400'>Last Name</th>
                <th className='py-2 text-center border border-foreground-400'>Credit</th>
                <th className='py-2 text-center border border-foreground-400'>Balance</th>
                <th className='py-2 text-center border border-foreground-400'>Auto Daily Reset Limit</th>
                <th className='py-2 text-center border border-foreground-400'>Current Win Loss Amount</th>
                <th className='py-2 text-center border border-foreground-400'>Maximum Win (on given credit)</th>
                <th className='py-2 text-center border border-foreground-400'>Current Win Limit (%)</th>
                <th className='py-2 text-center border border-foreground-400'>Maximum Loss</th>
                <th className='py-2 text-center border border-foreground-400'>Current Loss Limit (%)</th>
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
      <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title='My Thresholds Settings'>
        <ModalBody className=' text-sm'>
          <p>
            Get notified when your win/loss (based on your own position taking on all members) reaches your desired
            winning/losing thresholds below:
          </p>
          <div className='flex items-center text-xs gap-x-4 gap-y-2 flex-wrap'>
            <span className='w-[120px]'>Winning Threshold</span>
            <input type='text' className='bg-background border border-foreground-300 rounded-sm px-2 py-1' />
            <Checkbox size='sm'>
              <div className='text-xs'>Unlimited</div>
            </Checkbox>
          </div>
          <div className='flex items-center text-xs gap-x-4 gap-y-2 flex-wrap'>
            <span className='w-[120px]'>Losing Threshold</span>
            <input type='text' className='bg-background border border-foreground-300 rounded-sm px-2 py-1' />
            <Checkbox size='sm'>
              <div className='text-xs'>Unlimited</div>
            </Checkbox>
          </div>
          <p>To disable thresholds, select the Unlimited checkbox for both Winning/Losing Thresholds.</p>
        </ModalBody>
        <ModalFooter>
          <Button className='rounded' size='sm' color='primary' onClick={onOpenChange}>
            Submit
          </Button>
        </ModalFooter>
      </BaseModal>
    </>
  )
}

export default MyThresholds
