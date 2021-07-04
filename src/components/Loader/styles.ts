import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
interface ContainerProps {
  error?: boolean
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
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

  ${(props): false | FlattenSimpleInterpolation =>
    !!props.error &&
    css`
      & {
        .loader {
          display: none;
        }

        .error {
          p {
            text-align: center;
            margin-bottom: 8px;
          }
        }
      }
    `}
`
