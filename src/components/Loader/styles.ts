import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    animation: rotateLoading 1s infinite;
    border: 8px solid #ccc;
    border-top: 8px solid #209ff3;
    width: 100px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  @keyframes rotateLoading {
    to {
      transform: rotate(360deg);
    }
  }
`
