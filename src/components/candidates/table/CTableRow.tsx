import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { ICandidateProm } from '../../../modules/ICandidate'
import { useNavigate } from 'react-router-dom'
import { CANDIDATE_STATUS } from '../../../config'
import { formatDate } from '../../../utils'

interface CandidateItemProps {
    candidate: ICandidateProm
}
const CTableRow: FC<CandidateItemProps> = ({candidate}) => {
    const {candidatId, vacancyId, statusChange, recruterId, appointmentDate, statusChangeDate} = candidate
    const fio = `${candidatId.surname} ${candidatId.name} ${candidatId.otch}`
    const date = formatDate(statusChangeDate) // убрать вывод этой даты
    const [showFullContent, setShowFullContent] = useState(false)
    const navigate = useNavigate()

    const handleGoToCandidate = () => {
        if (showFullContent) {
            navigate(`/candidates/${candidatId.id}`)
        } else {
            // Показать содержимое ячейки полностью
            setShowFullContent(true);
          }
    }

    return (
        <tr>
            <Td data-content={fio} onClick={handleGoToCandidate}>{fio}</Td>
            <Td data-content={CANDIDATE_STATUS[statusChange]}>{CANDIDATE_STATUS[statusChange]}</Td>
            <Td data-content={appointmentDate ? appointmentDate : date}>{appointmentDate ? appointmentDate : date}</Td>
        </tr>
    )
}

export default CTableRow

const Td = styled.td`
    padding: 10px 16px;
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    position: relative;
    &:hover {
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
