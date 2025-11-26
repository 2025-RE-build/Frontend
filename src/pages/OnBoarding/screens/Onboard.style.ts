import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 361px;
  z-index: 5;
  top: 148px;
  position: absolute;
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

export const RebuildCharacter = styled.img`
  animation: ${float} 3.3s ease-in-out infinite;
  pointer-events: none;
  user-select: none;
  margin-top: 20px;
`;

export const FlowerLayer = styled.section`
  position: relative;
  width: 100%;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  //   padding-top: 70px;
  box-sizing: border-box;
  margin-top: 2px;

  /* 공통 꽃 스타일 */
  .flower,
  .smile {
    position: absolute;
    object-fit: contain;
    pointer-events: none;
    z-index: 5;
  }

  .smile {
    width: 96px;
    top: 491px;
    right: 23px;
  }

  .f1 {
    width: 76px;
    top: 378px;
    left: 32px;
  }

  .f2 {
    width: 95px;
    top: 133px;
    right: 31px;
  }

  .f3 {
    width: 26px;
    top: 403px;
    right: 75px;
  }

  .f5 {
    width: 38px;
    top: -42px;
    right: 79px;
  }

  .f6 {
    width: 147px;
    top: -111px;
    left: 0px;
  }
`;

// Onboard2
export const TopMessage = styled.div`
  width: 100%;
  text-align: center;
  color: #fddde6;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  z-index: 5;
  position: absolute;
  padding-top: 1px;
  top: 62px;
`;

export const Bubble = styled.div`
  margin-top: 40px;
  padding: 8px 14px;
  border-radius: 999px;
  background-color: #ffe2e9;
  font-size: 11px;
  font-weight: 500;
  color: #333;
`;

export const LetterImage = styled.img`
  margin-top: 32px;
  width: 200px;
  max-width: 70%;
`;

export const SpeechBubble = styled.div`
  position: relative;
  padding: 8px 26px;
  //   width: 300px;
  //   height: 35px;
  background: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 2px 2px 14px 0px rgba(0, 0, 0, 0.12);

  .black {
    color: gray;
  }

  &.speech2 {
    position: absolute;
    bottom: 324px;
  }

  &.speech1 {
    margin: 63px auto 0 auto;
  }
`;

export const SpeechTail = styled.div`
  content: "";
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;

  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid #ffffff;

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
`;

// Onboard5
export const LogoBox = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  margin-top: 120px;
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Rubik Mono One", sans-serif;
  font-size: 20px;
  color: white;
  z-index: 5;
  //   text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
`;

export const SpeechHead = styled.div`
  content: "";
  position: absolute;
  bottom: 359px;
  left: 50%;
  transform: translateX(-50%);

  width: 0;
  height: 0;

  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-bottom: 14px solid #ffffff;

  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
`;

export const RebuildCrush = styled.img`
  position: absolute;
  top: 11px;
  width: 482px;
  max-width: none;
  left: 50%;
  transform: translateX(-50%);
`;
