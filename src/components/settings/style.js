import styled, { keyframes } from "styled-components/macro";

const rotate = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
`;

export const Container = styled.div`
  position: fixed;
  right: 0;
  top: 30%;
  z-index: 3;

  button {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  img {
    animation: ${rotate} 2s linear infinite;
    transform-origin: center;
  }
`;
