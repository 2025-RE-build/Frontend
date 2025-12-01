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
  color: #ffc4d1;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  z-index: 5;
  position: absolute;
  padding-top: 1px;
  top: 62px;
  white-space: nowrap;
`;

export const SpeechBubble = styled.div`
  position: relative;
  padding: 8px 26px;

  background: #fff;
  font-size: 13px;
  font-weight: 600;
  border-radius: 50px;

  box-shadow: 2px 2px 14px 0px rgba(0, 0, 0, 0.12);

  .black {
    color: gray;
  }

  &.speech2 {
    position: absolute;
    bottom: 375px;
  }

  &.speech1 {
    margin: 63px auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.speech3 {
    margin: 36px auto 0;
    max-width: 80%;
    text-align: center;
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

// Onboard3, 4
export const MockUp = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 360px;
  margin: 78px auto 0;

  display: flex;
  justify-content: center;
  align-items: center;

  /* 공통 스타일 */
  .phone {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
  }

  .p1 {
    transform: translate(-80%, -66%);
  }

  .p2 {
    transform: translate(-20%, -39%);
  }

  .p3 {
    transform: translate(-80%, -39%);
    z-index: 5;
  }

  .p4 {
    transform: translate(-19%, -66%);
  }
`;

// Onboard5
export const LogoBox = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  margin-top: 40px;
`;

export const OverlayText = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Rubik Mono One", sans-serif;
  font-size: 20px;
  color: white;
  z-index: 5;
  white-space: nowrap;
`;

export const SpeechHead = styled.div`
  content: "";
  position: absolute;
  bottom: 410px;
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
