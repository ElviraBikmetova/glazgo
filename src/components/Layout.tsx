import React from 'react'
import { Outlet } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import * as C from "../styles/components"
import GlobalStyles from "../styles/global"
import Header from './header/Header'
import { baseTheme } from '../styles/theme'
import { useAppSelector } from '../hooks/redux'

const Layout = () => {
    // const token = localStorage.getItem('accessToken')
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <ThemeProvider theme={baseTheme}>
            <Wrapper>
                {isAuth && <Header />}
                {/* <Header /> */}
                <Main>
                    <C.Container>
                        <Outlet />
                    </C.Container>
                </Main>
                <GlobalStyles />
            </Wrapper>
        </ThemeProvider>
    )
}

export default Layout

const Wrapper = styled.div`
  width: 390px;
  margin: 0 auto;
`
const Main = styled.div`
  padding-top: 64px;
`