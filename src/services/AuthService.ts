import { IAuthData } from '../modules/IAuth'
import { IRegQueryData, IRegResponseData } from '../modules/IReg'
import decamelizeKeys from 'decamelize-keys'
import baseApi from './BaseApi'
import { IToken } from '../modules/IToken'

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        registration: build.mutation<IRegResponseData, IRegQueryData>({
            query: (regData) => ({
                url: '/user/reg/',
                method: 'POST',
                body: JSON.stringify(decamelizeKeys(regData))
            })
        }),
        login: build.mutation<IRegResponseData, IAuthData>({
            query: (authData) => ({
                url: '/user/login/',
                method: 'POST',
                body: JSON.stringify(authData)
            }),
            // transformErrorResponse: (response) => response.data
        }),
        logout: build.mutation({
            query: () => ({
                url: '/user/logout/',
                method: 'POST',
                // credentials: 'include'
            })
        }),
        verify: build.mutation<IToken, IToken>({
            query: (token) => ({
                url: '/user/token/verify/',
                method: 'POST',
                body: JSON.stringify(decamelizeKeys(token))
                // credentials: 'include'
            })
        }),
        refresh: build.mutation({
            query: (token) => ({
                url: '/user/token/refresh/',
                method: 'POST',
                body: JSON.stringify(decamelizeKeys(token))
                // credentials: 'include'
            })
        })
    })
})

export default authApi