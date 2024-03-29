import { Card, Col, Divider, Row, Space, Spin, Statistic, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppWindow, Briefcase, ManualGearbox } from 'tabler-icons-react'
import { setDescription, setTitle } from '../../ducks/site-info'
import {
  useGetApplicationsWithPropertiesQuery,
  useGetBusinessCapabilitiesQuery,
  useGetUnindexedApplicationsQuery
} from '../../services/model'
import { Spacer, rowStyle } from '../../styles'
import { APP_URLS } from '../../utils/constants'

const { Text } = Typography

const colProps = {
  span: { xs: 24, sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }
}

const ApplicationPortfolioMangementDashboard = () => {
  const dispatch = useDispatch()

  const { data: capabilities, isLoading: capabilitiesAreLoading, isFetching: capabilitiesAreFetching } = useGetBusinessCapabilitiesQuery()
  const {
    data: unindexedApplications,
    isLoading: unindexedApplicationsAreLoading,
    isFetching: unindexedApplicationsAreFetching
  } = useGetUnindexedApplicationsQuery()
  const {
    data: applications,
    isLoading: applicationsAreLoading,
    isFetching: applicationsAreFetching
  } = useGetApplicationsWithPropertiesQuery()

  useEffect(() => {
    dispatch(setTitle('Application Portfolio Management'))
    dispatch(
      setDescription(
        // eslint-disable-next-line max-len
        'The application portfolio management is a comprehensive resource dedicated to showcasing the diverse range of software applications used at Multipharma. It includes detailed information about each application, such as its purpose, the business processes it supports, its technical specifications, and its integration with other systems in the portfolio.'
      )
    )
  }, [])

  if (
    capabilitiesAreLoading ||
    capabilitiesAreFetching ||
    applicationsAreLoading ||
    applicationsAreFetching ||
    unindexedApplicationsAreLoading ||
    unindexedApplicationsAreFetching
  ) {
    return <Spin />
  }

  return (
    <>
        <Row {...rowStyle}>
          <Col {...colProps}>
            <Card>
              <Card.Meta title="Business Architecture" avatar={<Briefcase />} />
              <Divider />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="Capabilities" value={capabilities.length} />
                </Col>
                <Col span={12}>
                  <Statistic title="Assessed" value={0} />
                </Col>
              </Row>
              <Spacer />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="Capabilities" value={capabilities.length} />
                </Col>
                <Col span={12}>
                  <Statistic title="Assessed" value={0} />
                </Col>
              </Row>
              <Divider />
              <Text strong style={{ textTransform: 'uppercase', fontSize: '80%' }} sti>
                Capability Map
              </Text>
              <Space.Compact block>
                <Link to={APP_URLS.APM_CAPABILITY_MAP}>Browse Capability Map</Link>
              </Space.Compact>
            </Card>
          </Col>
          <Col {...colProps}>
            <Card>
              <Card.Meta title="Application Architecture" avatar={<AppWindow />} />
              <Divider />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="No. of Applications" value={applications.length} />
                </Col>
                <Col span={12}>
                  <Statistic title="My Applications" value={0} />
                </Col>
              </Row>
              <Spacer />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic
                    title="Non-compliant Apps"
                    valueStyle={{
                      color: '#cf1322'
                    }}
                    value={`${unindexedApplications.length} `}
                    // todo add informational tooltip to explain what unindexed applications are
                  />
                </Col>
                <Col span={12}>
                  <Statistic title="COTS / Homegrown" value="? / ?" />
                </Col>
              </Row>
              <Divider />
              <Text strong style={{ textTransform: 'uppercase', fontSize: '80%' }}>
                Application Portfolio
              </Text>
              <Space.Compact block>
                <Link to={APP_URLS.APM_APPLICATION_PORTFOLIO}>Search Application</Link>
              </Space.Compact>
            </Card>
          </Col>
          <Col {...colProps}>
            <Card>
              <Card.Meta title="Technology Architecture" avatar={<ManualGearbox />} />
              <Divider />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="No. of Technologies" value="?" />
                </Col>
                <Col span={12}>
                  <Statistic title="My Applications" value={0} />
                </Col>
              </Row>
              <Spacer />
              <Row {...rowStyle}>
                <Col span={12}>
                  <Statistic title="End of Life" value="?" />
                </Col>
                <Col span={12}>
                  <Statistic title="Major Risks" value="?" />
                </Col>
              </Row>
              <Divider />
              <Text strong style={{ textTransform: 'uppercase', fontSize: '80%' }}>
                Technology Portofolio
              </Text>
              <Space wrap split="|">
                <Link to={`${APP_URLS.APM_TECH}?category=L`}>Languages</Link>
                <Link to={`${APP_URLS.APM_TECH}?category=F`}>Frameworks</Link>
              </Space>
            </Card>
          </Col>
        </Row>
    </>
  )
}

export default ApplicationPortfolioMangementDashboard
