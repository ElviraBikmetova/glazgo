import Options from './Options'
import Pagination from './Pagination'
import * as C from '../../styles/components'
import VTable from './table/VTable'
import Close from '../../images/icons/close.svg'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { resetToInitialState } from '../../store/redusers/paginationSlice'
import { useEffect } from 'react'

const Vacancies = () => {
  const navigate = useNavigate()
  const handleClose = () => {
    navigate('/')
  }

  const dispatch = useAppDispatch()
  useEffect(() => {
    return () => {
      // Эта логика выполнится только при размонтировании компонента
      dispatch(resetToInitialState())
    };
  }, [])

  return (
    <div>
      <Title>
          <C.H2>Вакансии</C.H2>
          <C.NButton onClick={handleClose}>
              <C.SvgIconWrapper><Close/></C.SvgIconWrapper>
          </C.NButton>
      </Title>
        <Options path={'/zayavka'}/>
        <VTable />
        <Pagination />
    </div>
  )
}

export default Vacancies

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`