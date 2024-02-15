import { coreApi } from '../common/api'
import { API_ENDPOINTS } from '../utils/constants'

export const eapEndpoints = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getLifecycleStages: builder.query({
      query: () => ({
        url: `${API_ENDPOINTS.CORE.LIFECYCLE_STAGES}`,
        method: 'GET'
      })
    }),
    getLifecycleStageTypes: builder.query({
      query: () => ({
        url: `${API_ENDPOINTS.CORE.LIFECYCLE_STAGE_TYPES}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetLifecycleStagesQuery, useGetLifecycleStageTypesQuery } = eapEndpoints
