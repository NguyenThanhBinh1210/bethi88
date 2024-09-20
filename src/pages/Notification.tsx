import { Tab, Tabs } from '@nextui-org/react'
import TabNormal from '~/components/Notification/TabNormal'
import TabPersonal from '~/components/Notification/TabPersonal'
import TabSpecial from '~/components/Notification/TabSpecial'
import TabSystem from '~/components/Notification/TabSystem'

const Notification = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' variant='underlined'>
        <Tab key='normal' title='Normal Announcement'>
          <TabNormal />
        </Tab>
        <Tab key='special' title='Special Announcement'>
          <TabSpecial />
        </Tab>
        <Tab key='system' title='System Announcement'>
          <TabSystem />
        </Tab>
        <Tab key='personal' title='Personal Message'>
          <TabPersonal />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Notification
