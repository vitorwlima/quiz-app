import styled, { css, FlattenSimpleInterpolation } from 'styled-components'

interface QuestionContainerProps {
  isCurrentQuestion: boolean
}

export const Container = styled.div`
  margin: 20px 40px;

  @media (min-width: 1024px) {
    max-width: 960px;
    margin: 20px auto;
  }
`

export const QuestionContainer = styled.div<QuestionContainerProps>`
  ${(props): false | FlattenSimpleInterpolation =>
    !props.isCurrentQuestion &&
    css`
      & {
        display: none;
      }
    `}
`

export const AlternativesContainer = styled.div``

export const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 12px;
  }
`
