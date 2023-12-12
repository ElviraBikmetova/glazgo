import React from 'react'
import { styled } from 'styled-components'
import Filter from '../../../images/icons/filter.svg'

const CTableHeader = () => {
    const titles = ['Кандидат', 'Статус', 'Прикреплен',]

    return (
        <Header>
            <tr>
                {titles.map((title, index) => {
                    return (
                        <th scope="col" key={title}>
                            <ThContainer>
                                <ThBody>
                                    <span>{title}</span>
                                    <SFilter/>
                                </ThBody>
                                {index < titles.length - 1 && <VDivider/>}
                            </ThContainer>
                        </th>
                    )
                })}
            </tr>
        </Header>
    )
}

export default CTableHeader

const Header = styled.thead`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.07px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    th {
        padding: 10px 16px;
        white-space: nowrap;
        overflow: hidden;
    }
    tr {
        > th:nth-child(1) {
            width: 200px;
        }
        > th:nth-child(2) {
            width: 100px;
        }
        > th:nth-child(3) {
            width: 150px;
        }
    }

`
const SFilter = styled(Filter)`
    width: 20px;
    height: 20px;
`
const ThContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ThBody = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`
const VDivider = styled.div`
    width: 1px;
    height: 20px;
    background-color: #D7D7D7;
    margin-right: -16px;
`