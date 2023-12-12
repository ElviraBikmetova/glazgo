import styled, { css } from "styled-components";
import { input } from "../../styles/components";

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    /* margin-bottom: 32px; */
    /* position: relative; */
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
`
export const Status = styled.div`
    /* position: absolute;
    left: 0;
    font-size: 12px; */

`
export const VacancyName = styled.div`
    text-align: center;
    margin: 4px 0 10px;
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
export const Checkbox = styled.input`
    ${inputS}
    margin: 0;
    height: auto;
`
export const Textarea = styled.textarea`
    ${inputS}
    height: auto;
`
export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 16px;
`
export const RefProgramm = styled.label`
    display: flex;
    align-items: center;
    column-gap: 8px;
    margin-bottom: 6px;
`
export const Ref = styled.div`
    display: flex;
    flex-direction: column;
`
