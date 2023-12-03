import { useGetApplicationsQuery } from '../../services/applications'

const ApplicationPortfolioDataTable = () => {
  const { isLoading } = useGetApplicationsQuery()

  return (
    <>
      {isLoading}
      
    </>
  )
}

export default ApplicationPortfolioDataTable
