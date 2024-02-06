import { Alert, Spin, Table } from 'antd'
import { useState } from 'react'

const DataTable = ({ data, isLoading, isError, error, columns }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  if (isLoading) {
    return <Spin />
  }

  if (isError) {
    return <Alert message="Error loading vendors." description={error} type="error" />
  }

  return (
    <>
      <Table
        rowSelection={rowSelection}
        size="small"
        columns={columns}
        dataSource={data}
      />
    </>
  )
}

export default DataTable
