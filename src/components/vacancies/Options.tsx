import React, { FC } from 'react'
import { css, styled } from 'styled-components'
import * as C from '../../styles/components'
import Plus from '../../images/icons/plus.svg'
import Funnel from '../../images/icons/funnel.svg'
import { Link } from 'react-router-dom'

interface OptionsProps {
    path: string;
}

const Options: FC<OptionsProps> = ({path}) => {
    return (
        <div>
            <BtnContainer>
                <Link to={path}>
                    <C.TFButton>
                        <SPlus><Plus/></SPlus>
                        Добавить
                    </C.TFButton>
                </Link>
                <C.TButton>
                    <SFunnel><Funnel/></SFunnel>
                    Фильтры
                </C.TButton>
            </BtnContainer>
        </div>
    )
}

export default Options

const BtnContainer = styled.div`
    display: flex;
    column-gap: 12px;
    margin-bottom: 10px;
`
const SPlus = styled.div`
    height: 20px;
    svg {
        width: 20px;
        height: 20px;
        path {
            fill:  ${({ theme }) => theme.colors.white};
        }
    }
`
const SFunnel = styled.div`
    height: 20px;
    svg {
        width: 20px;
        height: 20px;
    }
`

