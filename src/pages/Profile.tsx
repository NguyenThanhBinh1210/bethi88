import { Tabs, Tab } from '@nextui-org/react'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import TabOTP from '~/components/Profile/TabOTP'
import TabPassword from '~/components/Profile/TabPassword'
import TabProfileSetting from '~/components/Profile/TabProfileSetting'
import TabProtectionCode from '~/components/Profile/TabProtectionCode'
import TabSecurityCode from '~/components/Profile/TabSecurityCode'
import { AppContext } from '~/contexts/app.context'
const Profile = () => {
  const { isSecurity } = useContext(AppContext)
  const location = useLocation()
  const tabValue = (location.state as { tabValue: string | null })?.tabValue

  return (
    <div>
      <div className='flex w-full flex-col'>
        <Tabs defaultSelectedKey={tabValue || 'profile-settings'} aria-label='Options' variant='underlined'>
          <Tab key='profile-settings' title='Profile Settings'>
            {isSecurity && <TabProfileSetting />}
          </Tab>
          <Tab key='password' href={!isSecurity ? 'security-code' : ''} title='Password'>
            {isSecurity && <TabPassword />}
          </Tab>
          <Tab key='security-code' href={!isSecurity ? 'security-code' : ''} title='Security Code'>
            {isSecurity && <TabSecurityCode />}
          </Tab>

          <Tab key='otp' href={!isSecurity ? 'security-code' : ''} title='OTP'>
            {isSecurity && <TabOTP />}
          </Tab>
          <Tab key='protection-code' href={!isSecurity ? 'security-code' : ''} title='Protection Code'>
            {isSecurity && <TabProtectionCode />}
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Profile
