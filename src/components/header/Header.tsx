import React from 'react'
import { styled } from 'styled-components'
import * as C from '../../styles/components'
import MenuBurger from './MenuBurger'

const Header = () => {
  return (
    <SHeader>
        <C.Container>
            <MenuBurger/>
        </C.Container>
    </SHeader>
  )
}

export default Header

const SHeader = styled.header`
    height: 64px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.order.header};
`