import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertOctagon, Apps, HomeSearch, JumpRope, ThreeDCubeSphere } from 'tabler-icons-react'
import { APP_URLS } from '../../utils/constants'

export const Navigation = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  const items = [
    {
      key: 'it_assets',
      label: 'IT Assets',
      icon: <HomeSearch />,
      onClick: () => navigate(APP_URLS.IT_ASSETS)
    },
    {
      key: 'apps',
      label: 'Applications',
      icon: <Apps />,
      children: [
        {
          key: 'apps_dashboard',
          label: 'Dashboard',
          onClick: () => navigate(APP_URLS.APM_DASHBOARD)
        },
        {
          key: 'apps_portfolio',
          label: 'Portfolio',
          onClick: () => navigate(APP_URLS.APM_APPLICATION_PORTFOLIO)
        },
      ]
    },
    {
      key: 'bpm',
      label: 'Processes',
      icon: <JumpRope />,
      onClick: () => navigate(APP_URLS.BPM_PROCESSES)
    },
    {
      key: 'requirements_management',
      label: 'Requirements',
      icon: <ThreeDCubeSphere />,
      onClick: () => navigate(APP_URLS.REQUIREMENTS_MANAGEMENT)
    },
    { key: 'risk_management', label: 'Risks', icon: <AlertOctagon />, onClick: () => navigate(APP_URLS.RISK_MANAGEMENT) }
  ]

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{ backgroundColor: '#F8F9FA' }}
      id="sidebar"
    >
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/static/logo.png'})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 30,
          backgroundSize: 'contain',
          margin: 20
        }}
      />
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        style={{ backgroundColor: '#F8F9FA', fontSize: 14, fontWeight: 'bold', color: '#666699' }}
      />
    </Sider>
  )
}
