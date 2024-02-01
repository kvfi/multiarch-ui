import { Button, Divider, Flex, Space } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BusinessProcessDataTable from '../../components/data-tables/BusinessProcessDataTable'
import { setDescription, setTitle } from '../../ducks/site-info'
import { APP_URLS } from '../../utils/constants'

const BPMHomePage = () => {
  const dispatch = useDispatch()
  const navigatate = useNavigate()

  useEffect(() => {
    dispatch(setTitle('Business Processes'))
    dispatch(
      setDescription(
        // eslint-disable-next-line max-len
        ''
      )
    )
  }, [])

  return (
    <>
      <Flex justify="flex-end" align="flex-end">
        <Space.Compact>
          <Button type="primary" onClick={() => navigatate(APP_URLS.BPM_PROCESSES_NEW)}>
            New process
          </Button>
          <Button type="primary">My processes</Button>
        </Space.Compact>
      </Flex>
      <Divider />
      <BusinessProcessDataTable />
    </>
  )
}

export default BPMHomePage
