import React, { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <Container>
      <button onClick={onClick}>{children}</button>
    </Container>
  )
}
