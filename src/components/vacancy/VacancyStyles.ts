import styled, { css } from "styled-components";
import { input } from "../../styles/components";

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const VacancyName = styled.div`
    text-align: center;
    margin: 4px 0 10px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px; /* 130% */
    letter-spacing: -0.1px;
`
export const Head = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
`
export const Info = styled.div`
    /* margin-bottom: 26px; */
`
export const AutoItem = styled.div`
    margin-bottom: 10px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    margin: 20px 0;
`
export const inputS = css`
    ${input}
    margin: 2px 0 14px;
`
export const Select = styled.select`
    ${inputS}
`
export const Input = styled.input`
    ${inputS}
`
export const FormButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 20px;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-bottom: 50px;
`
