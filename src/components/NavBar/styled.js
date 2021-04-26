import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  width: 100%;
  height: 50px;

  background: #dcdcdc;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  color: #639aff;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;

  animation-name: randon-color;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;

  @keyframes randon-color {
    to {
      color: #ff7963;
    }
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
`;

export const FaPlayIcon = styled(FaPlay)`
  animation-name: movimation;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;

  @keyframes movimation {
    to {
      transform: translateX(50%)
    }
  }
`;

export const TranslateWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 15px;

    & {
      select {
        border: none;
        background-color: #f6f7f2a6;
        padding: 6px;
        border-radius: 5px;
      }
    }
`;
