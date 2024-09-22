import { Tab, Tabs } from '@nextui-org/react'
import TabAgency from '~/components/Domains/TabAgency'
import TabMember from '~/components/Domains/TabMember'

const AvailableDomains = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' variant='underlined'>
        <Tab key='Agency' title='Agency Domains'>
          <TabAgency />
        </Tab>
        <Tab key='Member' title='Member Domains'>
          <TabMember />
        </Tab>
      </Tabs>
    </div>
  )
}

export default AvailableDomains
