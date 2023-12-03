import { Col, Divider, Layout, Row, Space, Typography } from 'antd'
import React from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Navigation } from './navigation/Navigation'
import TopMenu from './navigation/TopMenu'
import SidebarMenu from './navigation/SidebarMenu'

const { Content } = Layout

const { Title, Text } = Typography

export const SiteLayout = () => {
  const siteInfo = useSelector((state) => state.siteInfo)

  return (
    <>
      <Helmet>
        <title>
          {siteInfo.title} | {process.env.REACT_APP_APP_NAME}
        </title>
      </Helmet>
      <TopMenu />
      <Layout
        className="layout"
        style={{
          backgroundColor: 'transparent'
        }}
      >
        <Row
          gutter={20}
          style={{
            padding: '1rem'
          }}
        >
          <Col span={4}>
            <Text strong>Navigation</Text>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <Divider />
              <SidebarMenu />
              <Navigation />
            </Space>
          </Col>
          <Col span={20}>
            <Row>
              <Col span={6}>
                <Title level={4}>{siteInfo.title}</Title>
              </Col>
              <Col span={18}>{siteInfo.description && <Text style={{ fontSize: '80%' }}>{siteInfo.description}</Text>}</Col>
            </Row>
            <Divider />
            <Content>
              <Outlet />
            </Content>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
