import ManagerLayout from '~/layouts/ManagerLayout'
import MemberWinLossLimit from '~/pages/RiskMagagement/MemberWinLossLimit'
import MyThresholds from '~/pages/RiskMagagement/MyThresholds'

export const riskManagementRoute = [
  {
    path: '/risk-management/member-win-loss-limit',
    element: (
      <ManagerLayout>
        <MemberWinLossLimit />
      </ManagerLayout>
    )
  },
  {
    path: '/risk-management/my-thresholds',
    element: (
      <ManagerLayout>
        <MyThresholds />
      </ManagerLayout>
    )
  }
]
