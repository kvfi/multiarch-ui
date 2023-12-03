import { Button, Flex, Spin } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../components/data-tables/DataTable'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetVendorsQuery } from '../../services/vendors'
import { APP_URLS } from '../../utils/constants'

const VendorsPage = () => {
  const dispatch = useDispatch()
  const navigatate = useNavigate()
  const { data: vendorsData, isLoading: vendorsAreLoading, isError: vendorsIsError, error: vendorsError } = useGetVendorsQuery()

  useEffect(() => {
    dispatch(setTitle('All vendors'))
    dispatch(setDescription('A comprehensive list of IT vendors with who we are currently or were partnered.'))
  }, [])

  if (vendorsAreLoading) {
    return <Spin />
  }

  return (
    <>
      <Flex justify="flex-end" align="flex-end">
        <Button.Group>
          <Button onClick={() => navigatate(APP_URLS.MASTER_DATA_VENDORS_NEW)}>New Vendor</Button>
        </Button.Group>
      </Flex>
      <DataTable
        data={vendorsData}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>
          },
          {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
          },
          {
            title: 'Contact name',
            dataIndex: 'contact_name',
            key: 'contact_name'
          },
          {
            title: 'Contact email',
            dataIndex: 'contact_email',
            key: 'contact_email'
          }
        ]}
        isLoading={vendorsAreLoading}
        isError={vendorsIsError}
        vendorsError={vendorsError}
      />
    </>
  )
}

export default VendorsPage
