import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
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
  border-top: 5px solid black;
  //   padding-top: 1px;
  white-space: nowrap;
`;

export const FlowerLayer = styled.div`
  position: absolute;
  width: 100%;

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
    width: 34px;
    top: 622px;
    left: 7px;
  }

  .f2 {
    width: 76px;
    top: -18px;
    right: -1px;
  }

  .f3 {
    width: 51px;
    top: 41px;
    right: 105px;
  }

  .f4 {
    width: 38px;
    top: 703px;
    right: 22px;
  }
`;

export const LeftPane = styled.div`
  width: 100%;
  background: #000;
  padding: 18px;
  box-sizing: border-box;
  position: relative;
  //   overflow: hidden;
`;

export const LeftInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const InnerOutline = styled.div`
  background: #ff4fa0;
  border-radius: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  z-index: 7;

  &.to {
    left: -95px;
    margin: 23px 16px 12px;
    position: relative;
    height: 63px;
  }

  &.from {
    right: -95px;
    margin: 12px 16px;
    position: relative;
    height: 63px;
  }

  &.body {
    margin: 0;
    height: 514px;
  }
`;

export const ToBar = styled.div`
  width: 100%;
  position: relative;
  height: 51px;
  border-radius: 30px;
  background: #ffe2e9;
  border: 3px solid #000;
  display: flex;
  align-items: center;
  padding: 0 67px;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 16px;
  letter-spacing: 0.12em;
  color: #000;
`;

export const FromBar = styled.div`
  width: 100%;
  position: relative;
  height: 51px;
  border-radius: 30px;
  background: #ffe2e9;
  border: 3px solid #000;
  display: flex;
  align-items: center;
  padding: 0 33px;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 16px;
  letter-spacing: 0.12em;
  color: #000;
`;

export const NameInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  font-family: "Pretendard", sans-serif;
  color: #000;
`;

/* 편지지 */
export const LetterBody = styled.div`
  flex: 1;
  background: #ffe2e9;
  border-radius: 30px;
  border: 3px solid #000;
  height: 100%;
  padding: 26px 20px 70px;
  position: relative;
  box-sizing: border-box;
`;

export const LineList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LineRow = styled.li`
  border-bottom: 1.3px solid #000;
`;

export const WriteRow = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 16px;

  display: flex;
  align-items: center;
`;

export const LineSegment = styled.div`
  flex: 1;
  border-bottom: 1.3px solid #000;
`;

export const WriteButton = styled.button`
  min-width: 161px;
  height: 47px;
  border-radius: 24px;
  background: #ffe2e9;
  border: 1px solid #000;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Rubik Mono One", sans-serif;
  font-size: 16px;
  color: #000;

  cursor: pointer;
`;
