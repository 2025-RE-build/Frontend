import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffd6e7;
  overflow: hidden;
`;

export const TopMessage = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  background-color: #ff5fa4;
  color: #fddde6;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  z-index: 5;
  border-top: 5px solid black;
  padding-top: 1px;
  white-space: nowrap;
`;

export const TopSection = styled.section`
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
    width: 59px;
    top: 39px;
    left: 0px;
  }

  .f1 {
    width: 123px;
    top: 230px;
    left: 10px;
  }

  .f2 {
    width: 44px;
    top: 34px;
    left: 66px;
  }

  .f3 {
    width: 32px;
    top: 57px;
    right: 14px;
  }

  .f4 {
    width: 66px;
    top: 270px;
    right: 0px;
  }

  .f5 {
    width: 84px;
    top: 53px;
    right: 52px;
  }

  .f6 {
    width: 42px;
    top: 116px;
    right: 7px;
  }

  .Rebuild-character {
    position: absolute;
    width: 360px;
    top: 84px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;
  }
`;

export const StartButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 117px;
  transform: translateX(-50%);
  z-index: 7;

  width: 161px;
  height: 47px;
  border-radius: 24px;
  background: #ffffff;
  border: 2px solid #000000;
  box-shadow: 0px 4px 4px 0px #00000040;

  font-family: "Rubik Mono One", sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2px;
  cursor: pointer;

  &:active {
    transform: translate(-50%, 4px);
    box-shadow: 0 2px 0 #000000;
  }
`;

export const WaveDivider = styled.div`
  //   position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  line-height: 0;
  z-index: 3;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
