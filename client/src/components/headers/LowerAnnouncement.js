import React from "react";
import styled, { keyframes } from "styled-components";
// import { small } from '../.../responsive';
import { small } from './responsive';

const runningText = keyframes`
0% {transform:translateX(100%)}
100%{transform:translateX(-100%)}
`;

const Container = styled.div`
  font-weight: 700;
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
  background-color: rgba(241, 132, 118, 0.13);
  overflow: hidden;
  ${small({ height: "4rem" })};

  & p {
    width: 100%;
    position: relative;
    color: #dc5e7b;
    animation: ${runningText} 10s infinite linear;
  }
`;

const LowerAnnouncement = () => {
  return (
    <Container>
      <p>
        Cкидки до 50% !!! {" "} {" "}Распродажа!!!{" "} Подарки !!!
      </p>
    </Container>
  );
};

export default LowerAnnouncement;
