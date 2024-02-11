import { coreApi } from '../common/api'
import { API_ENDPOINTS } from '../utils/constants'

export const bpmEndpoints = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getBusinessProcesses: builder.query({
      query: () => ({
        url: `${API_ENDPOINTS.APM.BUSINESS_PROCESS}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetBusinessProcessesQuery } = bpmEndpoints
