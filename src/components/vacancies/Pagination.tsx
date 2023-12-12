import { FC } from 'react'
import styled from 'styled-components'
import ArrowLeft from '../../images/icons/arrow-left.svg'
import ArrowRight from '../../images/icons/arrow-right.svg'
import * as C from '../../styles/components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setNext, setParams, setPrev } from '../../store/redusers/paginationSlice'

const Pagination: FC = () => {
    const { count, startCount, endCount, next, previous } = useAppSelector(state => state.pagination)
    const dispatch = useAppDispatch()
    const handlePrevPage = () => {
        dispatch(setParams(previous))
        dispatch(setPrev(true))
        dispatch(setNext(false))
        if (!previous) {
            dispatch(setPrev(false))
            dispatch(setNext(true))
        }
    }
    const handleNextPage = () => {
        dispatch(setParams(next))
        dispatch(setNext(true))
        dispatch(setPrev(false))
        if (!next) {
            dispatch(setNext(false))
            dispatch(setPrev(true))
        }
    }

    return (
        <PContainer>
            <p>{startCount}-{endCount} из {count}</p>
            <Arrows>
                <C.NButton onClick={handlePrevPage} disabled={!previous}><ArrowLeft/></C.NButton>
                <C.NButton onClick={handleNextPage} disabled={!next}><ArrowRight/></C.NButton>
            </Arrows>
        </PContainer>
    )
}

export default Pagination

const PContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px; /* 125% */
    letter-spacing: -0.08px;
    margin-top: 24px;
`
const Arrows = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 16px;
`