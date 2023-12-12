import React, { FC, useEffect } from 'react'
import TableHeader from './VTableHeader'
import { styled } from 'styled-components'
import VTableRow from './VTableRow'
import vacancyApi from '../../../services/VacancyService'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setPaginationData } from '../../../store/redusers/paginationSlice'

const VTable: FC = () => {
    const dispatch = useAppDispatch()
    const params = useAppSelector(state => state.pagination.params)
    const {data} = vacancyApi.useFetchVacanciesQuery(params ? params : '')
    const vacancies = data?.results

    useEffect(() => {
        if (data) {
            dispatch(setPaginationData(data))
        }
    }, [data, dispatch])

    return (
        <TableContainer>
            <Table>
                <TableHeader />
                <tbody>
                    {vacancies && vacancies.map(vacancy => <VTableRow key={vacancy.id} vacancy={vacancy} />)}
                </tbody>
            </Table>
        </TableContainer>
    )
}

export default VTable

const TableContainer = styled.div`
    max-width: 100%;
    overflow-x: auto;
`

const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    max-width: 600px;
    border-collapse: collapse;
    border: 1px solid #D7D7D7;
    margin: 10px 0;
`
