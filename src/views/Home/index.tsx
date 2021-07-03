import React, { useState } from 'react'
import { Container, InputWrapper } from './styles'

import { Input, Select } from '../../components'

const Home = () => {
  const [questionsNumber, setQuestionsNumber] = useState(10)
  const [selectedCategory, setSelectedCategory] = useState('any')
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy')

  const categoryOptions = [
    {
      value: 'any',
      text: 'Any Category',
    },
    {
      value: '9',
      text: 'General Knowledge',
    },
  ]

  const difficultyOptions = [
    {
      value: 'easy',
      text: 'Easy',
    },
    {
      value: 'medium',
      text: 'Medium',
    },
    {
      value: 'hard',
      text: 'Hard',
    },
  ]

  return (
    <Container>
      <h1>Set up your quiz!</h1>
      <InputWrapper>
        <Input
          type='number'
          nameId='questionsNumber'
          label='Number of questions:'
          min={0}
          value={questionsNumber}
          onChange={e => setQuestionsNumber(+e.target.value)}
        />
        <Select
          nameId='category'
          options={categoryOptions}
          value={selectedCategory}
          label='Select category:'
          onChange={e => setSelectedCategory(e.target.value)}
        />
        <Select
          nameId='difficulty'
          options={difficultyOptions}
          value={selectedDifficulty}
          label='Select a difficulty:'
          onChange={e => setSelectedDifficulty(e.target.value)}
        />
      </InputWrapper>
    </Container>
  )
}

export default Home
