import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  /* width: 100%; */
  margin-top: -28px;
  z-index: 4;
  margin: -52px 20px;
`;

export const BgImage = styled.img`
  width: 100%;
  display: block;
`;

export const LogoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 287px;
  pointer-events: none;
  user-select: none;
`;

export const DdayText = styled.div`
  position: absolute;
  top: 74px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Rubik Scribble", sans-serif;
  font-size: 70px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: white;
  z-index: 5;
`;

export const TodoCardPart = styled.div`
  position: absolute;
  top: -5px;
  right: 50px;
  width: 95px;
  height: 68px;
  background: #ffe2e9;
  border-radius: 0 0 18px 18px;
  z-index: 1;
`;

export const ReasonCardPart = styled.div`
  position: absolute;
  top: 189px;
  left: 129px;
  transform: translateX(-50%);
  width: 52px;
  height: 70px;
  background: #ff5fa4;
  border-radius: 12px;
  z-index: 7;
`;
