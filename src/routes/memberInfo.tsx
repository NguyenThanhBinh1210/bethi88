import ManagerLayout from '~/layouts/ManagerLayout'
import AgentList from '~/pages/MemberInfo/AgentList'
import CreditBalance from '~/pages/MemberInfo/CreditBalance'
import DormantAccountList from '~/pages/MemberInfo/DormantAccountList'
import IndirectLoginAccount from '~/pages/MemberInfo/IndirectLoginAccount'
import MemberCommission from '~/pages/MemberInfo/MemberCommission'
import NewAgent from '~/pages/MemberInfo/NewAgent'
import PositionTaking from '~/pages/MemberInfo/PositionTaking'
import PositionTakingTemplate from '~/pages/MemberInfo/PositionTakingTemplate'
import ProblemAccountList from '~/pages/MemberInfo/ProblemAccountList'
import SubAccount from '~/pages/MemberInfo/SubAccount'

export const memberInfo = [
  {
    path: '/member-info/new-agent',
    element: (
      <ManagerLayout>
        <NewAgent />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/position-taking-template',
    element: (
      <ManagerLayout>
        <PositionTakingTemplate />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/sub-account',
    element: (
      <ManagerLayout>
        <SubAccount />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/agent-list',
    element: (
      <ManagerLayout>
        <AgentList />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/problem-account-list',
    element: (
      <ManagerLayout>
        <ProblemAccountList />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/credit-balance',
    element: (
      <ManagerLayout>
        <CreditBalance />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/position-taking',
    element: (
      <ManagerLayout>
        <PositionTaking />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/member-commission',
    element: (
      <ManagerLayout>
        <MemberCommission />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/indirect-login-account',
    element: (
      <ManagerLayout>
        <IndirectLoginAccount />
      </ManagerLayout>
    )
  },
  {
    path: '/member-info/dormant-account-list',
    element: (
      <ManagerLayout>
        <DormantAccountList />
      </ManagerLayout>
    )
  }
]
