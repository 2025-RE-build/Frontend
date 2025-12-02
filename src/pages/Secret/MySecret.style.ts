import styled from "styled-components";

export const Container = styled.main`
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
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopMessage = styled.div`
  width: 100%;
  text-align: center;
  color: #fddde6;
  font-family: "Rubik Mono One", sans-serif;
  font-size: 13px;
  z-index: 5;
  border-top: 5px solid black;
  padding-top: 1px;
  white-space: nowrap;
`;

export const SecretArea = styled.section`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 640px;
  padding: 32px 16px 0;
  background-color: #000;
  box-sizing: border-box;

  .flower {
    position: absolute;
    pointer-events: none;
  }

  .f1 {
    bottom: -154px;
    left: -17px;
    width: 127px;
  }

  .f2 {
    top: 208px;
    left: 7px;
    width: 34px;
  }

  .f3 {
    top: 101px;
    right: 9px;
    width: 26px;
  }

  .f4 {
    bottom: 139px;
    right: 13px;
    width: 60px;
  }

  .f5 {
    top: 90px;
    right: 49px;
    width: 76px;
  }

  .f6 {
    top: 159px;
    right: 5px;
    width: 35px;
  }

  .f7 {
    bottom: -38px;
    right: -37px;
    width: 90px;
  }

  .f8 {
    bottom: -7px;
    left: 15px;
    width: 38px;
  }
`;

export const BackLogo = styled.img`
  position: absolute;
  bottom: 94px;
  left: 50%;
  transform: translateX(-50%);
  width: 140%;
  max-width: 482px;
  opacity: 0.9;
  pointer-events: none;
`;

export const SpeechBubble = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 9px 22px;
  max-width: 280px;

  border-radius: 20px;
  background-color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  color: #000;

  text-align: center;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 21%;
    transform: translateX(-50%);
    border-width: 10px 10px 0 10px;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
  }
`;

export const LetterCharacter = styled.img`
  position: relative;
  left: -52px;
  top: -28px;
  width: 312px;
  height: auto;
  z-index: 2;
`;

export const ButtonGroup = styled.div`
  position: relative;
  margin-top: 40px;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 144px;
  z-index: 3;
  width: 100%;
  max-width: 420px;
`;

export const ButtonWrapper = styled.div`
  width: 95%;
  height: 105px;
  max-width: 420px;
  margin: 0 auto;
  padding: 18px;
  border-radius: 65px;
  border: 2px solid #000;
  background-color: #ffc4d1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecretButton = styled.button`
  width: 100%;
  height: 55px;
  border-radius: 35px;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  .icon {
    font-size: 18px;
  }

  img {
    width: 17px;
    height: 17px;
    object-fit: contain;
  }

  &:hover {
    background: #ff4fa0;
    border-left: none;
    border-top: none;
    box-shadow: none;
  }
`;
