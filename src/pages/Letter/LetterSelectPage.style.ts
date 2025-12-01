import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #ffc4d1;
  align-items: center;
  padding-bottom: 120px; /* nav바 자리 */
  box-sizing: border-box;
`;

export const TopMessage = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  color: #fddde6;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  z-index: 10;
  border-top: 2px solid black;
  //   padding-top: 1px;
  white-space: nowrap;
`;

export const WaveWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  z-index: 3;
`;

export const WaveImage1 = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  bottom: 18px;
  pointer-events: none;
`;

export const WaveImage2 = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  bottom: 42px;
  left: 208px;
  pointer-events: none;
`;

export const WaveImage3 = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  bottom: 71px;
  pointer-events: none;
`;

export const FlowerLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 480px;

  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 2px;

  /* 공통 꽃 스타일 */
  .flower {
    position: absolute;
    object-fit: contain;
    pointer-events: none;
    z-index: 5;
  }

  .f1 {
    width: 123px;
    top: 24px;
    right: 0px;
  }

  .f2 {
    width: 84px;
    top: 11px;
    left: 49px;
  }

  .f3 {
    width: 34px;
    top: 157px;
    left: 28px;
  }

  .f4 {
    width: 25px;
    top: 24px;
    left: 22px;
  }
`;

export const SpeechBubble = styled.div`
  position: relative;
  margin: 63px auto 0 auto;
  //   padding: 14px 26px;
  width: 300px;
  height: 35px;
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

export const CharacterBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -30px;

  img {
    width: 360px;
    height: auto;
  }
`;

export const ButtonRow = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 70px;
`;

export const GlassCircle = styled.button`
  position: relative;
  width: 93px;
  height: 93px;
  border-radius: 50%;
  background: transparent;
  border: none;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 44px;
    z-index: 2;
    position: relative;
    filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.2));
  }

  border-left: 2px solid rgba(255, 255, 255, 0.6);
  border-top: 2px solid rgba(255, 255, 255, 0.6);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.2), 0 0 35px rgba(255, 255, 255, 0.3);

  transition: all 0.25s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 14px;
    border-radius: 50%;

    background: radial-gradient(
      circle at center,
      rgb(0 0 0 / 18%) 0%,
      rgb(0 0 0 / 10%) 35%,
      rgb(56 56 56 / 5%) 60%,
      rgb(130 130 130 / 0%) 85%
    );

    filter: blur(1.2px);
    z-index: 1;
  }

  &:hover {
    background: #ff4fa0;
    border-left: none;
    border-top: none;
    box-shadow: none;
  }

  &:hover::before {
    background: transparent;
    filter: none;
  }

  &:hover img {
    filter: none;
  }
`;
