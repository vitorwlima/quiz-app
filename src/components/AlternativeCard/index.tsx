import React from 'react'
import { ReactNode } from 'react'
import { IAnswers } from '../../interfaces'
import { Container } from './styles'

interface AlternativeCardProps {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLDivElement>
  optionSelected: IAnswers
  isCorrect: boolean
  isIncorrectAndSelected: boolean
}

export const AlternativeCard = ({
  children,
  onClick,
  optionSelected,
  isCorrect,
  isIncorrectAndSelected,
}: AlternativeCardProps) => {
  return (
    <Container
      onClick={onClick}
      optionSelected={optionSelected}
      isCorrect={isCorrect}
      isIncorrectAndSelected={isIncorrectAndSelected}
    >
      <p>{children}</p>
    </Container>
  )
}
