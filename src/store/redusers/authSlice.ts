import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
    },
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        logout(state) {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('role')
            state.isAuth = false
        }
    }
})

export const {setAuth, logout} = authSlice.actions

export default authSlice.reducer