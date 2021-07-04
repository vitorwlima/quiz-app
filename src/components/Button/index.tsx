import React, { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export const Button = ({ onClick, children, disabled }: ButtonProps) => {
  return (
    <Container>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </Container>
  )
}
