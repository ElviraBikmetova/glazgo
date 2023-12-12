import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { IVacancy } from '../../../modules/IVacancy'
import { useNavigate } from 'react-router-dom'
import { REGION, VACANCY_STATUS } from '../../../config'

interface VacancyItemProps {
    vacancy: IVacancy
}

const VTableRow: FC<VacancyItemProps> = ({vacancy}) => {
    const {nameVacancy, statusVacancy, region, salary, id} = vacancy
    const [showFullContent, setShowFullContent] = useState(false)
    const navigate = useNavigate()

    const handleGoToVacancy = () => {
        if (showFullContent) {
            navigate(`/vacancies/${id}`)
        } else {
            // Показать содержимое ячейки полностью
            setShowFullContent(true);
          }
    }

    return (
        <tr>
            <Td data-content={id}>{id}</Td>
            <Td data-content={nameVacancy} onClick={handleGoToVacancy}>{nameVacancy}</Td>
            <Td data-content={VACANCY_STATUS[statusVacancy]}>{VACANCY_STATUS[statusVacancy]}</Td>
            <Td data-content={REGION[region]}>{REGION[region]}</Td>
            <Td data-content={salary}>{salary}</Td>
        </tr>
    )
}

export default VTableRow

const Td = styled.td`
    padding: 10px 16px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    position: relative;
    &:hover, &:active {
        overflow: visible;
        &::after {
            content: attr(data-content);
            position: absolute;
            background-color: ${({ theme }) => theme.colors.lightGray};
            /* border: 1px solid ${({ theme }) => theme.colors.gray}; */
            border-radius: 4px;
            padding: 10px 16px;
            top: 0;
            left: 0;
            width: max-content;
            white-space: normal;
            z-index: 999;
        }
    }
`
