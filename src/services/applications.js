import { coreApi } from "../common/api"
import { API_ENDPOINTS } from "../utils/constants"



export const applicationEndpoints = coreApi.injectEndpoints({
    endpoints: (builder) => ({
      getApplications: builder.query({
        query: (body) => ({
          url: API_ENDPOINTS.APPLICATIONS,
          method: 'GET',
          body: body
        })
      }),
      addApplication: builder.mutation({
        query: (body) => ({
          url: API_ENDPOINTS.APPLICATIONS,
          method: 'POST',
          body: body
        })
      }),
    })
  })
  
  export const {
    useGetApplicationsQuery,
    useAddApplicationMutation
  } = applicationEndpoints
  

