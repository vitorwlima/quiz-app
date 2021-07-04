import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IQuestions } from '../../interfaces/IQuestions'
import { IAnswers } from '../../interfaces/IAnswers'
import api from '../../services/api'

import {
  AlternativesContainer,
  Container,
  FinalContainer,
  QuestionContainer,
} from './styles'
import { AlternativeCard, Button } from '../../components'

interface IParams {
  amount: string
  category: string
  difficulty: string
}

export const Quiz = () => {
  const { amount, category, difficulty }: IParams = useParams()
  const history = useHistory()

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
      setQuestions(response.data.results)
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
    return <div>Carregando...</div>
  }

  return (
    <Container>
      {questions.map((q, index) => (
        <QuestionContainer
          key={q.question}
          isCurrentQuestion={index === currentQuestion}
        >
          <h2>{q.question}</h2>
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
                  {answer.alternative}
                </AlternativeCard>
              ))}
          </AlternativesContainer>
          {selectedAnswer.alternative && (
            <Button onClick={handleNextQuestion}>Próxima pergunta</Button>
          )}
        </QuestionContainer>
      ))}
      {currentQuestion > questions.length - 1 && (
        <FinalContainer>
          <h2>
            Você acertou {score} / {questions.length}!
          </h2>
          <Button onClick={handleReturnHome}>Voltar para a tela inicial</Button>
        </FinalContainer>
      )}
    </Container>
  )
}
