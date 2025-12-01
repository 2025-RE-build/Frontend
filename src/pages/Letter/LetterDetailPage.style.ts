import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const TopMessage = styled.div`
  width: 100%;
  //   position: absolute;
  text-align: center;
  background-color: #000;
  color: #fddde6;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  z-index: 10;
  border-top: 5px solid black;
  white-space: nowrap;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const LeftInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  background: #ffe2e9;
  box-sizing: border-box;
  padding: 80px 0 40px;
  min-height: 100%;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const BackBtn = styled.button`
  position: absolute;
  left: 6px;
  top: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 7px 3px;

  img {
    width: 30px;
    height: auto;
  }
`;

export const startLogo = styled.img`
  width: 240px;
  z-index: 6;
  position: absolute;
  top: -29px;
`;

export const LineList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 32px 0;
  display: flex;
  flex-direction: column;
  margin-top: 120px;
`;

export const LineRow = styled.li`
  width: 100%;
  border-bottom: 1.3px solid #000;
  height: 28px;
`;

export const TextArea = styled.textarea`
  position: absolute;
  inset: 0;
  padding: 0 32px 32px;
  border: none;
  resize: none;
  background: transparent;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
  font-family: "Pretendard", sans-serif;

  &::placeholder {
    color: #444;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }
`;

export const LetterBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
