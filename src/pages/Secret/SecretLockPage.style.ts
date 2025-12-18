import styled from "styled-components";

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #ff5fa2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px; /* nav 자리 */
  box-sizing: border-box;
`;

export const MainSection = styled.section`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 16px 0;
  box-sizing: border-box;
`;

export const TopMessage = styled.div`
  width: 100%;
  text-align: center;
  background-color: #000;
  color: #fddde6;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  padding: 5px 0;
  margin-bottom: 16px;
`;

export const SpeechBubble = styled.div`
  position: relative;
  padding: 10px 22px;
  border-radius: 20px;
  background-color: #fff;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 40px;

  span {
    color: #9d9d9d;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 12px 10px 0 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }
`;

export const LockArea = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const LockImage = styled.img`
  width: 306px;
  height: auto;
`;

export const ErrorOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

export const ErrorBox = styled.div`
  position: relative;
  z-index: 0;

  width: 90%;
  max-width: 640px;
  padding: 34px 22px;
  border-radius: 18px;

  background: transparent;
  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.9);

  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: rgb(0 0 0 / 26%);
    mix-blend-mode: normal;
    pointer-events: none;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: -1;

    box-shadow: inset 6px 3px 14px rgba(255, 255, 255, 0.55),
      inset -8px -8px 18px rgba(255, 121, 189, 0.9),
      inset 0 0 10px rgba(255, 255, 255, 0.18);

    background: radial-gradient(
      ellipse 130% 180% at 50% 35%,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(241, 72, 151, 0.3) 40%,
      rgba(255, 139, 193, 0.06) 80%,
      rgba(238, 142, 188, 0) 100%
    );
  }
`;

export const DialsWrapper = styled.div`
  position: absolute;
  bottom: 64px;
  left: 56%;
  transform: translateX(-50%);
  display: flex;
  gap: 7px;
  z-index: 2;
`;

export const DialBox = styled.div`
  width: 40px;
  height: 100px;
  padding: 4px;
  background-color: #ff4fa0;
  //   box-shadow: 0 4px 0 #cc2a7a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DialWindow = styled.div`
  width: 100%;
  height: 93px;
  background-color: #ffc3dc;
  border: 0.13px solid #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const DialNumber = styled.span<{ $isCenter?: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-family: "Diplomata", cursive;
  color: #ff4fa0;
  -webkit-text-stroke: 0.6px #000000;

  background-color: ${({ $isCenter }) => ($isCenter ? "#FF708F" : "#FFC4D1")};

  border-bottom: 1.5px solid #000;

  &:last-child {
    border-bottom: none;
  }
`;

export const CheckButton = styled.button`
  margin-bottom: 50px;
  width: 153px;
  height: 51px;
  border-radius: 30px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  background-color: #ffffff;
  color: #000;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
