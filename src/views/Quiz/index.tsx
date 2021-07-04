import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IAnswers, IQuestions } from '../../interfaces'
import api from '../../services/api'

import {
  AlternativesContainer,
  Container,
  FinalContainer,
  QuestionContainer,
} from './styles'
import { AlternativeCard, Button, Loader } from '../../components'

interface IParams {
  amount: string
  category: string
  difficulty: string
}

export const Quiz = () => {
  const { amount, category, difficulty }: IParams = useParams()
  const history = useHistory()
  const he = require('he')

  const [error, setError] = useState(false)

  const [questions, setQuestions] = useState<IQuestions[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<IAnswers[][]>([])
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswers>({
    alternative: '',
    isCorrect: false,
  })

  useEffect(() => {
    const getData = async () => {
      const url =
        category === 'any'
          ? `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
          : `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      const response = await api.get(url)

      if (response.data.response_code === 0) {
        return setQuestions(response.data.results)
      }

      setError(true)
    }
    getData()
  }, [amount, category, difficulty])

  useEffect(() => {
    const incorrects = questions.map(q => q.incorrect_answers)
    const incorrectAnswers = incorrects.map(ans =>
      ans.map(incorrectAnswer => {
        return {
          alternative: incorrectAnswer,
          isCorrect: false,
        }
      })
    )

    const correctAnswers = questions.map(q => {
      return {
        alternative: q.correct_answer,
        isCorrect: true,
      }
    })

    const answers = incorrectAnswers.map((answersArr, index) => {
      answersArr.splice(Math.floor(Math.random() * 4), 0, correctAnswers[index])
      return answersArr
    })

    setAnswers(answers)
  }, [questions])

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setSelectedAnswer({
      alternative: '',
      isCorrect: false,
    })
  }

  const handleAlternativeClick = (answer: IAnswers) => {
    if (!selectedAnswer.alternative) {
      setSelectedAnswer(answer)
      if (answer.isCorrect) {
        setScore(score + 1)
      }
    }
  }

  const handleReturnHome = () => {
    history.push('/')
  }

  if (questions.length < 1) {
    return <Loader error={error} />
  }

  return (
    <Container>
      {questions.map((q, index) => (
        <QuestionContainer
          key={q.question}
          isCurrentQuestion={index === currentQuestion}
        >
          <h2>{he.decode(q.question)}</h2>
          <AlternativesContainer>
            {answers &&
              answers[index] &&
              answers[index].map(answer => (
                <AlternativeCard
                  key={answer.alternative}
                  onClick={() => handleAlternativeClick(answer)}
                  optionSelected={selectedAnswer}
                  isCorrect={answer.isCorrect}
                  isIncorrectAndSelected={
                    answer.alternative === selectedAnswer.alternative &&
                    !answer.isCorrect
                  }
                >
                  {he.decode(answer.alternative)}
                </AlternativeCard>
              ))}
          </AlternativesContainer>
          {selectedAnswer.alternative && (
            <Button onClick={handleNextQuestion}>Next question</Button>
          )}
        </QuestionContainer>
      ))}
      {currentQuestion > questions.length - 1 && (
        <FinalContainer>
          <h2>
            You got {score} / {questions.length}!
          </h2>
          <Button onClick={handleReturnHome}>Go back to home screen</Button>
        </FinalContainer>
      )}
    </Container>
  )
}
