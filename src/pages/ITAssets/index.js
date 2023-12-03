import { DownOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, Row } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'
import ITAssetsDataTable from '../../components/data-tables/ITAssetsDataTable'

const ITAssetsManagementHome = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTitle('IT Assets Management'))
    dispatch(
      setDescription(
        'Details on the various technological resources and equipment owned or used by \
        our organization. It encompasses hardware like computers and servers, \
        software applications, network infrastructure, but also policies and \
        procedures related to their use and management.'
      )
    )
  }, [])

  const items = [
    {
      label: 'Submit and continue',
      key: '1'
    }
  ]

  return (
    <>
      <Row>
        <Col span={8}></Col>
        <Col span={8} offset={8}>
            <Button>Export</Button>
            <Dropdown.Button icon={<DownOutlined />} menu={{ items }}>
              Submit
            </Dropdown.Button>
            <Button>aa</Button>
        </Col>
  </Row>Z
      <ITAssetsDataTable />
    </>
  )
}

export default ITAssetsManagementHome
