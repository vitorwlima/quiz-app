import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../'
import { Container } from './styles'

interface LoaderProps {
  error?: boolean
}

export const Loader = ({ error }: LoaderProps) => {
  const history = useHistory()
  const handleReturnHome = () => {
    history.push('/')
  }

  return (
    <Container error={error}>
      <div className='loader'></div>
      {error && (
        <div className='error'>
          <p>An error has ocurred.</p>
          <Button onClick={handleReturnHome}>Go back to home screen</Button>
        </div>
      )}
    </Container>
  )
}
