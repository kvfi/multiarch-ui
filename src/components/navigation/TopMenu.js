import { Layout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { AlertOctagon, Apps, HomeSearch, ThreeDCubeSphere } from 'tabler-icons-react'
import { APP_URLS } from '../../utils/constants'
import { getAppFromPath, getMenuKeyFromAppName } from '../../utils/fn'

const { Header } = Layout

const TopMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()


  return (
    <Header
      style={{
        backgroundColor: '#7CBA27'
      }}
    >
      <div className="demo-logo" />
      <Menu
        id="TopMenu"
        mode="horizontal"
        selectedKeys={[getMenuKeyFromAppName(getAppFromPath(location.pathname))]}
        items={[
          {
            key: 'it_assets',
            label: 'IT Assets',
            icon: <HomeSearch />,
            onClick: () => navigate(APP_URLS.IT_ASSETS)
          },
          {
            key: 'apps',
            label: 'Application Portfolio',
            icon: <Apps />,
            onClick: () => navigate(APP_URLS.APPLICATION_PORTFOLIO)
          },
          {
            key: 'requirements_management',
            label: 'Requirements Management',
            icon: <ThreeDCubeSphere />,
            onClick: () => navigate(APP_URLS.REQUIREMENTS_MANAGEMENT)
          },
          { key: 'risk_management', label: 'Risk Management', icon: <AlertOctagon />, onClick: () => navigate(APP_URLS.RISK_MANAGEMENT) }
        ]}
        style={{ background: 'transparent' }}
      />
    </Header>
  )
}

export default TopMenu
