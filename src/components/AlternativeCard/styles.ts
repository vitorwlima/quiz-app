import styled, { FlattenSimpleInterpolation, css } from 'styled-components'
import { IAnswers } from '../../interfaces'

interface ContainerProps {
  optionSelected: IAnswers
  isCorrect: boolean
  isIncorrectAndSelected: boolean
}

export const Container = styled.div<ContainerProps>`
  background-color: #ccc;
  padding: 1em;
  border-radius: 0.2em;
  margin: 12px 0;
  transition: 0.3s;

  p {
    text-align: center;
  }

  ${(props): false | FlattenSimpleInterpolation =>
    !props.optionSelected.alternative &&
    css`
      cursor: pointer;
      &:hover {
        background-color: #aaa;
      }
    `}

  ${(props): false | FlattenSimpleInterpolation =>
    !!props.optionSelected.alternative &&
    props.isCorrect &&
    css`
      & {
        background-color: #3bee4a;
      }
    `}

  ${(props): false | FlattenSimpleInterpolation =>
    !!props.optionSelected.alternative &&
    !props.isCorrect &&
    props.isIncorrectAndSelected &&
    css`
      & {
        background-color: #ec2e2e;
      }
    `}
`
