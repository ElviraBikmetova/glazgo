import React from 'react'
import NotFound from '../images/not-found.svg'
import { styled } from 'styled-components'
import * as C from '../styles/components'

const NotFoundPage = () => {
    return (
        <Container>
            <C.H1>Страница не найдена</C.H1>
            <ImgWrapper>
                <NotFound />
            </ImgWrapper>
        </Container>
    )
}

export default NotFoundPage

const Container = styled.div`
    height: 100svh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
`
const Title = styled.h1`
    margin: 15px 0;
`
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    svg {
        width: 213px;
        height: 293px;
    }
`