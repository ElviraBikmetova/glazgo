import React, { FC, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { css, styled } from 'styled-components'
import Burger from '../../images/icons/burger.svg'
import Close from '../../images/icons/close.svg'
import Logo from '../../images/icons/logo.svg'
import Folder from '../../images/icons/folder.svg'
import List from '../../images/icons/list.svg'
import Envelope from '../../images/icons/envelope.svg'
import UsersThree from '../../images/icons/users-three.svg'
import Newspaper from '../../images/icons/newspaper.svg'
import Cloud from '../../images/icons/cloud.svg'
import User from '../../images/icons/user.svg'
import Settings from '../../images/icons/settings.svg'
import Help from '../../images/icons/help.svg'
import * as C from '../../styles/components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import authApi from '../../services/AuthService'
import { logout } from '../../store/redusers/authSlice'
import { ERoutes } from '../../enums/routes'

const MenuBurger: FC = () => {
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()
    const handleGoToAuth = () => navigate('/authorization')
    const handleToggleNav = () => setNav(!nav)
    const handleGoToHome = () => navigate('/')
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()
    const [logoutUser] = authApi.useLogoutMutation()
    const handleLogOut = async () => {
        await logoutUser({})
        dispatch(logout())
    }

    let content

    if (isAuth) {
        content = <div onClick={handleLogOut}>Выйти</div>
    } else {
        content = <div onClick={handleGoToAuth}>Войти</div>
    }

    return (
        <div>
            <div>
                <Header>
                    <Icons>
                        <Btn onClick={handleToggleNav}>
                            {nav ? <SClose><Close/></SClose> : <SBurger><Burger/></SBurger>}
                        </Btn>
                        <SLogo onClick={handleGoToHome}>
                            <Logo />
                        </SLogo>
                    </Icons>
                    {content}
                </Header>
                {nav &&
                    <NavWrapper>
                        <C.Container>
                            <nav>
                                <ul>
                                    <Li>
                                        <IconWrapper><Folder/></IconWrapper>
                                        <NavLink to={ERoutes.Vacancies} onClick={handleToggleNav}>Вакансии</NavLink>
                                    </Li>
                                    <Li>
                                        <IconWrapper><UsersThree/></IconWrapper>
                                        <NavLink to={ERoutes.CandidatesAll} onClick={handleToggleNav}>Кандидаты</NavLink>
                                    </Li>
                                    <Li><IconWrapper><Envelope/></IconWrapper>
                                        <NavLink to={ERoutes.Zayavka} onClick={handleToggleNav}>Создать заявку</NavLink>
                                    </Li>
                                    <Li><IconWrapper><List/></IconWrapper>Проекты</Li>
                                    <Li><IconWrapper><Newspaper/></IconWrapper>Отчеты</Li>
                                    <Li><IconWrapper><Cloud/></IconWrapper>Чат</Li>
                                    <Li><IconWrapper><User/></IconWrapper>Профиль</Li>
                                    <Li><IconWrapper><Settings/></IconWrapper>Настройки</Li>
                                    <Li><IconWrapper><Help/></IconWrapper>Поддержка</Li>
                                </ul>
                            </nav>
                        </C.Container>
                    </NavWrapper>
                }
            </div>
        </div>
    )
}

export default MenuBurger

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.white};
`
const Icons = styled.div`
    display: flex;
    column-gap: 14px;
    align-items: center;
`
const Btn = styled.div`
    z-index: ${({ theme }) => theme.order.burger};
`
const whiteSvgIcon = css`
    path {
        fill:  ${({ theme }) => theme.colors.white};
    }
`
const SClose = styled.div`
    ${whiteSvgIcon}
    height: 24px;
    svg {
        width: 24px;
        height: 24px;
    }
`
const SBurger = styled.div`
    height: 24px;
    svg {
        width: 24px;
        height: 24px;
    }
`
const SLogo = styled.div`
    height: 18px;
    svg {
        width: 78px;
        height: 18px;
        ${whiteSvgIcon}
    }
`
const NavWrapper = styled.div`
    color: ${({ theme }) => theme.colors.white};
    position: fixed;
    left: 0;
    width: 100%;
    height: 100svh;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: ${({ theme }) => theme.order.header};
    top: 64px;
    transition: top 2s;
        ul {
            border-top: 1px solid ${({ theme }) => theme.colors.white};
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            padding: 24px 0;
        }
`
const Li = styled.li`
    display: flex;
    column-gap: 16px;
    align-items: center;
`
const IconWrapper = styled.div`
    height: 24px;
    svg {
        width: 24px;
        height: 24px;
        path {
            fill:  ${({ theme }) => theme.colors.white};
            stroke: ${({ theme }) => theme.colors.white};
        }
    }
`