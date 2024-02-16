import { coreApi } from '../common/api'
import { API_ENDPOINTS } from '../utils/constants'

export const irmEndpoints = coreApi.injectEndpoints({
  endpoints: (builder) => ({
    getRisks: builder.query({
      query: () => ({
        url: `${API_ENDPOINTS.IRM.RISKS}`,
        method: 'GET'
      })
    }),
    getRisksByModelId: builder.query({
      query: (modelId) => ({
        url: `${API_ENDPOINTS.IRM.RISKS}?model_id=${modelId}`,
        method: 'GET'
      })
    })
  })
})

export const { useGetRisksQuery, useGetRisksByModelIdQuery } = irmEndpoints
