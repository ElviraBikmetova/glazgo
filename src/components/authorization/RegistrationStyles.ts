import { styled } from "styled-components";
import { input } from "../../styles/components";

export const LogoWrapper = styled.div`
    text-align: center;
    svg {
        width: 171px;
        height: 40px;
    }
`
export const Title = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Label = styled.label`
    margin-bottom: 8px;
`
export const Input = styled.input`
    margin-bottom: 8px;
    ${input}
`
export const Select = styled.select`
    margin-bottom: 8px;
    ${input}
`