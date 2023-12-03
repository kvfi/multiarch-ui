import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'

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

  return 'a'
}

export default RequirementsRepositoryHome
