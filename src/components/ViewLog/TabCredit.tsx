import { useDisclosure } from '@nextui-org/react'
import BaseModal from '../modals/BaseModal'
import FilterController from './FilterController'
import { Link } from 'react-router-dom'

const TabCredit = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div>
        <FilterController checkbox={'Show all value'} dateRange input />
        <div className='w-full overflow-auto text-xs '>
          <table className='table-auto w-full border-collapse mt-4'>
            <thead>
              <tr className='bg-foreground-500 text-white'>
                <th className='py-2 text-center border border-foreground-400'>No.</th>
                <th className='py-2 text-center border border-foreground-400'>Username</th>
                <th className='py-2 text-center border border-foreground-400'>Action</th>
                <th className='py-2 text-center border border-foreground-400'>Details</th>
                <th className='py-2 text-center border border-foreground-400'>IP</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr>
                <td className='py-2 text-center bg-background dark:bg-foreground-100  border border-foreground-400'>
                  1
                </td>
                <td className='py-2 text-center bg-background dark:bg-foreground-100  border border-foreground-400'>
                  U4W00
                </td>
                <td className='py-2 text-center bg-background dark:bg-foreground-100  border border-foreground-400'>
                  <div>
                    <p className='font-medium text-orange-700'>Set Credit when Master's created</p>
                    <p className='italic text-gray-600'>by U4W 08/22/2024 01:20:07 AM</p>
                    <p className='italic'>#219109178</p>
                  </div>
                </td>
                <td className='py-2 text-center bg-background dark:bg-foreground-100  border border-foreground-400'>
                  <div>
                    UserName=U4W00, SubAccName= <span className='text-green-600 font-medium'>0</span> (0)
                  </div>
                </td>
                <td className='py-2 text-center bg-background dark:bg-foreground-100  border border-foreground-400'>
                  <div onClick={onOpen} className='hover:underline text-blue-500 cursor-pointer'>
                    84.247.170.123
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title={''}>
        <div className='px-3 text-xs pb-6 leading-5'>
          <table className='table-auto w-full border-collapse mt-4'>
            <thead>
              <tr className='bg-foreground-300 '>
                <th colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                  IP
                </th>
                <th colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                  <strong> 84.247.170.123</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>Country</td>
                <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                  <strong>Germany</strong>
                </td>
              </tr>
              <tr>
                <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>City</td>
                <td className='py-2 text-center bg-foreground-100  border border-foreground-400'>
                  <strong>Dusseldorf</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='mt-4'>
            <p className=''>
              Additional info at DNSstuff:{' '}
              <Link
                className='text-blue-600 hover:underline text-sm'
                target='_blank'
                to={`https://www.infobyip.com/ip-${'84.247.170.123'}.html`}
              >
                click here
              </Link>
              .Note: Country and city information is provided by IP2Location™ and DNSstuff which might only serve as a
              reference, with no warranty. Please consult other reliable sources for the current and accurate
              information, if required.
            </p>
            <p className='mt-3'>For IPv6, the same IP address may be displayed differently.</p>
            <p>For example:</p>
            <p>- IP address 1: 2001:db8:3333:4444:5555:6666:1.2.3.4</p>
            <p>- IP address 2: 2001:0db8:3333:4444:5555:6666:0102:0304</p>
          </div>
        </div>
      </BaseModal>
    </>
  )
}

export default TabCredit
