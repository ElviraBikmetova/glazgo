import React from 'react'
import Welcome from '../images/welcome.svg'
import Vacancies from '../images/icons/vacancies.svg'
import Candidates from '../images/icons/candidates.svg'
import Projects from '../images/icons/projects.svg'
import Profile from '../images/icons/profile.svg'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Wrapper>
      <SWelcome>
        <Welcome/>
      </SWelcome>
      <Board>
        <Link to='/vacancies'>
          <BoardItem>
            <IconWrapper><Vacancies/></IconWrapper>
            <div>Вакансии</div>
          </BoardItem>
        </Link>
        <Link to='/candidates'>
          <BoardItem>
            <IconWrapper><Candidates/></IconWrapper>
            <div>Кандидаты</div>
          </BoardItem>
        </Link>
        <BoardItem>
          <IconWrapper><Projects/></IconWrapper>
          <div>Проекты</div>
        </BoardItem>
        <BoardItem>
          <IconWrapper><Profile/></IconWrapper>
          <div>Профиль</div>
        </BoardItem>
      </Board>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  height: 100svh;

`
const SWelcome = styled.div`
  margin: 50px 0;
  svg {
    width: 360px;
    height: 250px;
  }
`
const IconWrapper = styled.div`
  svg {
    width: 64px;
    height: 64px;
  }
  margin-bottom: 12px;
`
const Board = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  row-gap: 50px;
`
const BoardItem = styled.div`
  text-align: center;
  font-weight: 700;
`
