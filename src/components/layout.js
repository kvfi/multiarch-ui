import { Affix, Alert, Breadcrumb, Col, Divider, Layout, Row, Typography } from 'antd'
import React from 'react'
import Helmet from 'react-helmet'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { APP_URLS } from '../utils/constants'
import { Navigation } from './navigation/Navigation'

const { Content } = Layout

const { Text, Title } = Typography

export const SiteLayout = () => {
  const siteInfo = useSelector((state) => state.siteInfo)

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
        <Layout>
          <Navigation />
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
