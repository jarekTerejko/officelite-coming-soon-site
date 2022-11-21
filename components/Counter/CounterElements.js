import styled from "styled-components";

export const CounterWrapper = styled.div``;

export const CounterHeading = styled.h2`
  color: var(--color-dark-white);
  text-transform: uppercase;
  font-size: 17px;
  letter-spacing: 4px;
  font-weight: 500;
  word-spacing: 3px;
`;

export const CounterHeadingTimeStr = styled.span`
  color: var(--color-blue);
`;

export const CounterBoxesWrapper = styled.div`
  margin-top: 17px;
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    margin-bottom: 48px;
  }
`;

export const CounterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background: #323a52;
  padding: 17px 0;
  border-radius: 14px;
  min-width: 100px;

  &:last-of-type {
    margin-right: 0;
  }

  @media screen and (max-width: 560px) {
    margin-right: 10px;
    min-width: 62px;
    padding: 10px 0;
  }
`;

export const CounterDigit = styled.h3`
  font-size: 54px;
  color: var(--color-dark-white);
  font-family: "Roboto Mono", monospace;

  @media screen and (max-width: 560px) {
    font-size: 36px;
  }
`;

export const CounterSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
`;