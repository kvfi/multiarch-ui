import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'
import { Table } from 'antd'

const NewRequirement = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTitle('New Requirement'))
    dispatch(setDescription('Create a new package requirements'))
  }, [])

  return (
    <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
        size="small"
      />
  )
}

export default NewRequirement
