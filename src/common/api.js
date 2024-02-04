import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const coreApi = createApi({
  reducerPath: 'coreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_CORE_API_URL
  }),
  endpoints: () => ({})
})

export const modelApi = createApi({
  reducerPath: 'modelApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_MODEL_API_URL
  }),
  endpoints: () => ({})
})