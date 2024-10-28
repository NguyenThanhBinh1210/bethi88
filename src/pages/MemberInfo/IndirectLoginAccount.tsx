import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react'

const IndirectLoginAccount = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <div>
        <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Indirect Login Account</div>
        <div>
          <Button onPress={onOpen} size='sm' color='primary'>
            Connect To New Account
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
                <th className='py-2 text-center border border-foreground-400'>Lock Status</th>
                <th className='py-2 text-center border border-foreground-400'>Indirect Log In</th>
                <th className='py-2 text-center border border-foreground-400'>Disconnect</th>
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
      <Modal size='xl' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>New Indirect Login Account</ModalHeader>
              <ModalBody>
                <Input
                  label='Your Downline Username Or Nickname'
                  labelPlacement='outside'
                  placeholder=' '
                  size='sm'
                  variant='underlined'
                  id='username'
                  type='text'
                />
                <Input
                  label='Password'
                  labelPlacement='outside'
                  placeholder=' '
                  size='sm'
                  variant='underlined'
                  id='password'
                  type='password'
                />
                <Checkbox>
                  <div className='text-xs'>Show Password</div>
                </Checkbox>
              </ModalBody>
              <ModalFooter>
                <Button size='sm' color='primary' onPress={onClose}>
                  Connect
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default IndirectLoginAccount
