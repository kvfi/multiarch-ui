import { Affix, Alert, Breadcrumb, Col, Divider, Layout, Menu, Row, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { AlertOctagon, Apps, HomeSearch, JumpRope, TableAlias, ThreeDCubeSphere } from 'tabler-icons-react'
import { APP_URLS } from '../utils/constants'

const { Content } = Layout

const { Text, Title } = Typography

export const SiteLayout = () => {
  const siteInfo = useSelector((state) => state.siteInfo)
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
          key: 'apps_portfolio',
          label: 'Portfolio',
          icon: <TableAlias />,
          onClick: () => navigate(APP_URLS.APM_APPLICATION_PORTFOLIO)
        }
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
    <>
      <Helmet>
        <title>
          {siteInfo.title} | {process.env.REACT_APP_APP_NAME}
        </title>
      </Helmet>
      <Affix offsetTop={top}>
        <Alert
          style={{ textAlign: 'center' }}
          banner
          message="
              Multipharma Enterprise Architecture Platform is currently in beta. You may experience errors. If you need help, contact
              eap@multipharma.be"
        />
      </Affix>
      <Layout
        style={{
          minHeight: '100vh'
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: '#F8F9FA' }}>
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
        <Layout>
          <Content style={{ padding: 24, minHeight: 360 }}>
            <Breadcrumb
              separator=">"
              style={{ fontWeight: 'bold' }}
              items={[
                {
                  title: 'Home',
                  href: APP_URLS.DASHBOARD
                },
                {
                  title: siteInfo.title
                }
              ]}
            />
            <Divider />
            <Row>
              <Col xs={0} sm={1} md={2} xl={3} xxl={3}></Col>
              <Col xs={24} sm={22} md={20} xl={18} xxl={18}>
                <Title level={2}>{siteInfo.title}</Title>
                {siteInfo.description && <Text>{siteInfo.description}</Text>}
                <br />
                <br />
                <br />
                <Outlet />
              </Col>
              <Col xs={0} sm={1} md={2} xl={3} xxl={3}></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
