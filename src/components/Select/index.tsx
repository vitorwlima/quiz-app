import React from 'react'
import { Container } from './styles'

interface Option {
  value: string
  text: string
}

interface SelectProps {
  nameId: string
  label?: string
  options: Option[]
  value: string | number
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const Select = ({
  nameId,
  label,
  options,
  value,
  onChange,
}: SelectProps) => {
  return (
    <Container>
      <label htmlFor={nameId}>{label}</label>
      <select name={nameId} id={nameId} value={value} onChange={onChange}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </Container>
  )
}
