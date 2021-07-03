import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  button {
    padding: 0.5em 1em;
    font-size: 1rem;
    border-radius: 0.3em;
    background-color: #209ff3;
    color: #eee;
    cursor: pointer;

    &:hover {
      background-color: ${shade(0.2, '#209ff3')};
    }
  }
`
