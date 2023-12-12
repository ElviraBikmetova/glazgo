import { css, styled } from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container.width + 30}px;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
`
// FButton - функциональные кнопки
// LButton - кпопки ссылки
// NButton - кнопки навигации
// TButton - кнопки таблицы
// TFButton - функциональные кнопки таблицы

export const button = css`
    height: 46px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
`
export const FButton = styled.button`
    ${button}
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    &[disabled] {
        background-color: ${({ theme }) => theme.colors.inactive};
    }
`
export const LButton = styled.button`
    ${button}
    background-color: ${({ theme }) => theme.colors.white};
    border: 0.5px solid ${({ theme }) => theme.colors.gray};
    box-shadow: 0px 4px 4px 0px rgba(17, 30, 62, 0.06)
`
export const LinkBtn = styled.a`
    ${button}
    background-color: ${({ theme }) => theme.colors.white};
    border: 0.5px solid ${({ theme }) => theme.colors.gray};
    box-shadow: 0px 4px 4px 0px rgba(17, 30, 62, 0.06);
    margin: 10px 0;
`
export const NButton = styled(LButton)`
    width: 40px;
    height: 40px;
    &[disabled] {
        path {
        fill:  ${({ theme }) => theme.colors.gray};
        }
    }
`
export const tButton = css`
    height: 40px;
    padding: 0 12px;
    width: auto;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.07px;
    column-gap: 4px;
`
export const TButton = styled(LButton)`
    ${tButton}
`
export const TFButton = styled(FButton)`
    ${tButton}
`
export const H1 = styled.h1`
    font-size: 30px;
    font-weight: 700;
    line-height: 38px; /* 126.667% */
    letter-spacing: -0.15px;
`
export const H2 = styled.h2`
    font-size: 24px;
    font-weight: 700;
    line-height: 30px; /* 125% */
    letter-spacing: -0.12px;
    margin: 24px 0;
`
export const input = css`
    height: 48px;
    padding: 12px 16px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.lightGray};
    border: 1px solid ${({ theme }) => theme.colors.gray};
`
export const SvgIconWrapper = styled.div`
    height: 16px;
    svg {
        width: 16px;
        height: 16px;
    }
`

