import React from 'react'
import * as C from '../styles/components'
import Success from '../images/success.svg'
import { styled } from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import vacancyApi from '../services/VacancyService'

const VacancyClosed = () => {
    const {id} = useParams()
    const {data: vacancy} = vacancyApi.useFetchVacancyQuery(id ? id : '')
    const navigate = useNavigate()
    return (
        <Wrapper>
            <ImgWrapper>
                <Success />
             </ImgWrapper>
            <Title>Поздравляем!</Title>
            <Title>Вакансия</Title>
            <Vacancy>"{vacancy && vacancy.nameVacancy}"</Vacancy>
            <Title>закрыта</Title>
            <Buttons>
                <C.FButton>Оценить процесс подбора</C.FButton>
                <C.LButton onClick={() => navigate('/vacancies')}>Вернуться к списку вакансий</C.LButton>
            </Buttons>
        </Wrapper>
    )
}

export default VacancyClosed

const Wrapper = styled.div`
    padding: 50px 0;
    text-align: center;

`
const ImgWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    svg {
        width: 213px;
        height: 293px;
    }
`
const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    line-height: 38px; /* 126.667% */
    letter-spacing: -0.15px;
`
const Vacancy = styled(Title)`
    color: ${({ theme }) => theme.colors.primary};
`
const Buttons = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
`