import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px; /* nav바 자리 */
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodySection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;

  .flower {
    position: absolute;
    object-fit: contain;
    pointer-events: none;
    z-index: 5;
  }

  .f1 {
    width: 127px;
    top: 458px;
    left: -16px;
  }

  .f2 {
    width: 34px;
    top: -17px;
    left: 14px;
  }

  .f3 {
    width: 28px;
    top: -115px;
    right: 8px;
  }

  .f4 {
    width: 46px;
    top: 278px;
    right: 8px;
  }

  .f5 {
    width: 85px;
    top: -120px;
    right: 46px;
  }

  .f6 {
    width: 39px;
    top: -51px;
    right: 7px;
  }

  .f6--bottom {
    width: 39px;
    left: 13px;
    top: 410px;
  }
`;

export const TopBar = styled.div`
  position: relative;
  width: 100%;
  height: 138px;
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
  padding: 0;

  img {
    width: 45px;
    height: auto;
  }
`;

export const startLogo = styled.img`
  width: 175px;
  z-index: 6;
  margin-top: 37px;
`;

export const TopMessage = styled.div`
  width: 100%;
  //   position: absolute;
  text-align: center;
  color: #fddde6;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  z-index: 5;
  border-top: 5px solid black;
  padding-top: 1px;
`;

export const QuestionCard = styled.div`
  width: 86%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #ffc4d1;
  border: 2px solid #000;
  border-radius: 12px;
  padding: 18px 18px 24px;
  margin-top: 20px;
  box-sizing: border-box;
  z-index: 7;
`;

export const QuestionTitle = styled.div`
  background: #ffffff;
  border-radius: 7px;
  padding: 12px 14px;
  border: 0.4px solid #000;
  margin-bottom: 14px;
  font-size: 11px;
  font-weight: 700;
  /* line-height: 1.4; */
  color: #333333;
`;

export const Input = styled.input`
  width: 100%;
  height: 37px;
  border-radius: 20px;
  border: none;
  padding: 0 16px;
  outline: none;
  font-size: 11px;
  box-sizing: border-box;

  &::placeholder {
    color: #bfbfbf;
  }
`;

export const SaveButton = styled.button`
  margin-top: 28px;
  width: 161px;
  height: 49px;
  border-radius: 24px;
  border: 1px solid #000;
  background: #ffffff;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  box-shadow: 0 6px 0 #000000;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:active {
    transform: translateY(3px);
    box-shadow: 0 3px 0 #000000;
  }
`;
