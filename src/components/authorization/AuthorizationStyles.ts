import { styled } from "styled-components";
import { FButton, input } from "../../styles/components";

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
    margin: 8px 0;
`
export const Input = styled.input`
    margin-bottom: 20px;
    ${input}
`
export const Error = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 14px; /* 116.667% */
    letter-spacing: -0.06px;
    color: ${({ theme }) => theme.colors.error};
    margin-top: -14px;
`
export const CFButton = styled(FButton)`
    margin-top: 30px;
`