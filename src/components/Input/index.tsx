import React, { ChangeEventHandler } from 'react'
import { Container } from './styles'

interface InputProps {
  type: string
  nameId: string
  label?: string
  value: string | number
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
  min?: number
}

export const Input = ({
  type,
  nameId,
  label,
  value,
  onChange,
  min,
}: InputProps) => {
  return (
    <Container>
      <label htmlFor={nameId}>{label}</label>
      <input
        type={type}
        name={nameId}
        id={nameId}
        value={value}
        onChange={onChange}
        min={min}
      />
    </Container>
  )
}
