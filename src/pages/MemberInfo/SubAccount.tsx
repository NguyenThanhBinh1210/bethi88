import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Checkbox
} from '@nextui-org/react'
import SingleSelection from '~/components/SingleSelection'

const options = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' }
]
const SubAccount = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div>
        <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium flex items-center gap-4'>
          <h1>Sub Account </h1>
          <Button onPress={onOpen} className='!py-0' size='sm' color='primary'>
            Add Sub Account
          </Button>
        </div>

        <div className='w-full overflow-auto text-xs '>
          <table className='table-auto w-full border-collapse mt-4'>
            <thead>
              <tr className='bg-foreground-500 text-white'>
                <th className='py-2 text-center border border-foreground-400'>#</th>
                <th className='py-2 text-center border border-foreground-400'>Username</th>
                <th className='py-2 text-center border border-foreground-400'>Nickname</th>
                <th className='py-2 text-center border border-foreground-400'>First Name</th>
                <th className='py-2 text-center border border-foreground-400'>Last Name</th>
                <th className='py-2 text-center border border-foreground-400'>Member information</th>
                <th className='py-2 text-center border border-foreground-400'>Bets & Forecast</th>
                <th className='py-2 text-center border border-foreground-400'>Reports</th>
                <th className='py-2 text-center border border-foreground-400'>Bet Lists</th>
                <th className='py-2 text-center border border-foreground-400'>Transfer</th>
                <th className='py-2 text-center border border-foreground-400'>View Log</th>
                <th className='py-2 text-center border border-foreground-400'>Edit</th>
                <th className='py-2 text-center border border-foreground-400'>Password</th>
                <th className='py-2 text-center border border-foreground-400'>Security Code</th>
                <th className='py-2 text-center border border-foreground-400'>Remove OTP</th>
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
      <Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Add Sub Account</ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex items-center gap-2'>
                    <p className='text-sm w-24'>Username</p>
                    <div className='flex items-center gap-2'>
                      <p>U4W00Sub</p>
                      <SingleSelection color='default' variant='bordered' options={options}></SingleSelection>
                      <SingleSelection color='default' variant='bordered' options={options}></SingleSelection>
                    </div>
                  </div>
                  <Input
                    label={<p className='text-sm w-24'>Password</p>}
                    labelPlacement='outside-left'
                    size='sm'
                    classNames={{
                      input: 'w-52'
                    }}
                    variant='bordered'
                    id='password'
                    type='text'
                  />

                  <Input
                    label={<p className='text-sm w-24'>First Name</p>}
                    labelPlacement='outside-left'
                    size='sm'
                    classNames={{
                      input: 'w-52'
                    }}
                    variant='bordered'
                    id='firstname'
                    type='text'
                  />
                  <Input
                    label={<p className='text-sm w-24'>Last Name</p>}
                    labelPlacement='outside-left'
                    size='sm'
                    classNames={{
                      input: 'w-52'
                    }}
                    variant='bordered'
                    id='lastname'
                    type='text'
                  />
                </div>

                <div className='mt-4'>
                  <p className='text-sm font-medium'>Account Permission</p>
                </div>
                <div className='w-full overflow-auto text-xs '>
                  <table className='table-auto w-full border-collapse '>
                    <thead>
                      <tr className='bg-foreground-500 text-white'>
                        <th className='py-2 text-center border border-foreground-400'>Member information</th>
                        <th className='py-2 text-center border border-foreground-400'>Bets & Forecast</th>
                        <th className='py-2 text-center border border-foreground-400'>Reports</th>
                        <th className='py-2 text-center border border-foreground-400'>Bet Lists</th>
                        <th className='py-2 text-center border border-foreground-400'>Transfer</th>
                        <th className='py-2 text-center border border-foreground-400'>View Log</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>None</td>
                        <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                          <Checkbox size='sm'></Checkbox>
                        </td>
                        <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                          <Checkbox size='sm'></Checkbox>
                        </td>
                        <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                          <Checkbox size='sm'></Checkbox>
                        </td>
                        <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                          <Checkbox size='sm'></Checkbox>
                        </td>
                        <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                          <Checkbox size='sm'></Checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button size='sm' color='primary' onPress={onClose}>
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default SubAccount
