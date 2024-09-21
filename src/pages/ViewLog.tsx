import { Tab, Tabs } from '@nextui-org/react'
import TabCredit from '~/components/ViewLog/TabCredit'
import TabLogin from '~/components/ViewLog/TabLogin'
import TabSetting from '~/components/ViewLog/TabSetting'
import TabStatus from '~/components/ViewLog/TabStatus'

const ViewLog = () => {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' variant='underlined'>
        <Tab key='Setting' title='Setting'>
          <TabSetting />
        </Tab>
        <Tab key='Status' title='Status'>
          <TabStatus />
        </Tab>
        <Tab key='Credit' title='Credit'>
          <TabCredit />
        </Tab>
        <Tab key='Login' title='Login'>
          <TabLogin />
        </Tab>
      </Tabs>
    </div>
  )
}

export default ViewLog
