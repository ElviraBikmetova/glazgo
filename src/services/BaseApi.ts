import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { logout } from "../store/redusers/authSlice";
import { IRegResponseData } from "../modules/IReg";
import { Mutex } from "async-mutex";

// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://127.0.0.1:8000',
//     prepareHeaders: (headers) => {
//       headers.set('Content-Type', 'application/json')
//       const token = localStorage.getItem('accessToken')
//       if (token) {
//           headers.set('Authorization', `Bearer ${token}`)
//       }
//       return headers
//     },
// })

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
  prepareHeaders: (headers) => {
    if (!headers.has("Content-Type")) {
      headers.set('Content-Type', 'application/json')
      const token = localStorage.getItem('accessToken')
      if (token) {
          headers.set('Authorization', `Bearer ${token}`)
      }
    }
    return headers
  },
  credentials: 'include',
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await baseQuery('/api/refresh/', api, extraOptions)
        if (refreshResult.data) {
          const refreshData  = refreshResult.data as IRegResponseData
          localStorage.setItem('accessToken', refreshData.accessToken)
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Candidate'],
  endpoints: () => ({}),
})

export default baseApi