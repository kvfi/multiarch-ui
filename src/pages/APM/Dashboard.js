import { Card, Col, Divider, Row, Space, Spin, Statistic, Typography } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppWindow, Briefcase, ManualGearbox } from 'tabler-icons-react'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetApplicationsWithPropertiesQuery, useGetBusinessCapabilitiesQuery } from '../../services/model'
import { Spacer, rowStyle } from '../../styles'
import { APP_URLS } from '../../utils/constants'

const { Text } = Typography

const ApplicationPortfolioMangementDashboard = () => {
  const dispatch = useDispatch()
  

  const { data: capabilities, isLoading: capabilitiesAreLoading, isFetching: capabilitiesAreFetching } = useGetBusinessCapabilitiesQuery()
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

 

  if (capabilitiesAreLoading || capabilitiesAreFetching || applicationsAreLoading || applicationsAreFetching) {
    return <Spin />
  }

  return (
    <>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex'
        }}
      >
        
        <Row {...rowStyle}>
          <Col span={8}>
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
          <Col span={8}>
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
                  <Statistic title="COTS" value="?" />
                </Col>
                <Col span={12}>
                  <Statistic title="Homegrown" value={0} />
                </Col>
              </Row>
              <Divider />
              <Text strong style={{ textTransform: 'uppercase', fontSize: '80%' }}>
                Application Portfolio
              </Text>
              <Space.Compact block>
                <Link to={APP_URLS.APM_SEARCH_APPLICATION}>Search Application</Link>
              </Space.Compact>
            </Card>
          </Col>
          <Col span={8}>
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
      </Space>
    </>
  )
}

export default ApplicationPortfolioMangementDashboard
