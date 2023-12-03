import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDescription, setTitle } from '../../ducks/site-info'
import ApplicationPortfolioDataTable from '../../components/data-tables/ApplicationPortfolio'
import { Button, Flex } from 'antd'
import { useNavigate } from 'react-router-dom'
import { APP_URLS } from '../../utils/constants'

const ApplicationPortfolioHome = () => {
  const dispatch = useDispatch()
  const navigatate = useNavigate()

  useEffect(() => {
    dispatch(setTitle('Application Portfolio'))
    dispatch(
      setDescription(
        // eslint-disable-next-line max-len
        'The application portfolio page is a comprehensive resource dedicated to showcasing the diverse range of software applications used at Multipharma. It includes detailed information about each application, such as its purpose, the business processes it supports, its technical specifications, and its integration with other systems in the portfolio.'
      )
    )
  }, [])

  return (
    <>
      <Flex justify="flex-end" align="flex-end">
        <Button.Group>
          <Button onClick={() => navigatate(APP_URLS.APPLICATION_PORTFOLIO_NEW_APP)}>New Application</Button>
        </Button.Group>
      </Flex>
      <ApplicationPortfolioDataTable />
    </>
  )
}

export default ApplicationPortfolioHome
