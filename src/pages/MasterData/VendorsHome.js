/* eslint-disable no-unused-vars */
import { Button, Divider, Flex, Pagination, Spin, Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setDescription, setTitle } from '../../ducks/site-info'
import { useGetVendorsQuery } from '../../services/vendors'
import { APP_URLS } from '../../utils/constants'

const VendorsPage = () => {
  const dispatch = useDispatch()
  const navigatate = useNavigate()
  const {
    data: vendorsData,
    isLoading: vendorsAreLoading,
    isError: vendorsIsError,
    error: vendorsError,
    refetch: refetchVendors
  } = useGetVendorsQuery()

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
      <Divider />
      <Table
        loading={vendorsAreLoading}
        size="small"
        rowKey="id"
        dataSource={vendorsData.items}
        columns={[
          {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>
          },
          {
            title: 'Contact name',
            dataIndex: 'contact_name'
          },
          {
            title: 'Contact email',
            dataIndex: 'contact_email'
          }
        ]}
        pagination={{
          total: vendorsData.total,
          pageSize: vendorsData.size,
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} items`,
          onShowSizeChange: (_, size) => alert(size),
          onChange: (page) => refetchVendors({ page: page })
        }}
      />
    </>
  )
}

export default VendorsPage
