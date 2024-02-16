import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'
import { Button, Flex, Space } from 'antd'

const RequirementsRepositoryHome = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setTitle('Requirements Management'))
    dispatch(
      setDescription(
        'Identify, document, prioritize, and track \
        the evolving requirements of a project or system, \
        ensuring they are met throughout the project lifecycle.\
         This page may also cover tools and best practices for effective requirements management.'
      )
    )
  }, [])

  return (
    <>
      <Flex justify="flex-end" align="flex-end">
        <Space.Compact>
          <Button type="primary" onClick={() => null}>
            Create requirement package
          </Button>
          <Button type="primary">New requirement</Button>
        </Space.Compact>
      </Flex>
    </>
  )
}

export default RequirementsRepositoryHome
