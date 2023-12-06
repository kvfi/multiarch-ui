import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { combineReducers } from 'redux'
import siteInfoReducer from './ducks/site-info'
import { applicationEndpoints } from './services/applications'
import { businessDepartmentEndpoints } from './services/business_departments'
import { vendorsEndpoints } from './services/vendors'

const reducer = combineReducers({
  siteInfo: siteInfoReducer,
  [applicationEndpoints.reducerPath]: applicationEndpoints.reducer,
  [businessDepartmentEndpoints.reducerPath]: businessDepartmentEndpoints.reducer,
  [vendorsEndpoints.reducerPath]: vendorsEndpoints.reducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicationEndpoints.middleware, businessDepartmentEndpoints.middleware, vendorsEndpoints.middleware)
})

setupListeners(store.dispatch)

export default store
