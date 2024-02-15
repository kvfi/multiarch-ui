import { coreApi } from '../common/api'
import { API_ENDPOINTS } from '../utils/constants'

export const applicationEndpoints = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getApplications: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATIONS,
        method: 'GET',
        body: body
      })
    }),
    getApplicationCriticalities: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATION_CRITICALITIES,
        method: 'GET',
        body: body
      })
    }),
    getApplicationStatuses: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATION_STATUSES,
        method: 'GET',
        body: body
      })
    }),
    getApplicationTypes: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATION_TYPES,
        method: 'GET',
        body: body
      })
    }),
    getApplicationEnvironments: builder.query({
      query: (body) => ({
        url: API_ENDPOINTS.APPLICATION_ENVIRONMENTS,
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
    getApplicationByAppCode: builder.query({
      query: (appCode) => ({
        url: `${API_ENDPOINTS.APPLICATIONS}/${appCode}`,
        method: 'GET'
      })
    })
  })
})

export const {
  useGetApplicationsQuery,
  useGetApplicationByAppCodeQuery,
  useLazyGetApplicationByAppCodeQuery,
  useGetApplicationCriticalitiesQuery,
  useGetApplicationStatusesQuery,
  useGetApplicationEnvironmentsQuery,
  useGetApplicationTypesQuery,
  useAddApplicationMutation
} = applicationEndpoints
