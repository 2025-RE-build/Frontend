import styled from "styled-components";
import callingBackground from "@/assets/phoneBackground.svg";

// 통화 종료시
interface DimProps {
  $ended?: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 90px 0 150px;
  background: url(${callingBackground}) no-repeat center center;
  background-size: cover;
  overflow: hidden;
`;

export const TopInfo = styled.section<DimProps>`
  position: relative;
  text-align: center;
  color: #ffffff;
  z-index: 1;
  margin-top: 60px;

  opacity: ${({ $ended }) => ($ended ? 0.4 : 1)};
  transition: opacity 0.25s ease;

  p {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
    font-family: "Pretendard", sans-serif;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 4px;
    font-family: "Rubik Mono One", sans-serif;
  }
`;

export const ButtonArea = styled.section<DimProps>`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;

  opacity: ${({ $ended }) => ($ended ? 0.4 : 1)};
  transition: opacity 0.25s ease;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
`;

export const RoundButton = styled.button`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: radial-gradient(
    circle at 30% 30%,
    rgba(255, 255, 255, 0.35),
    rgba(255, 255, 255, 0.12)
  );
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: rgb(191 88 133 / 55%);
    mix-blend-mode: multiply;
    opacity: 0.55;
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: 0;

    box-shadow: inset 4px 2px 10px rgb(255 255 255 / 55%),
      inset -6px -6px 14px rgb(255 121 189),
      inset 0 0 6px rgba(255, 255, 255, 0.18);
  }

  cursor: pointer;
  outline: none;

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;

export const IconImg = styled.img`
  width: 40px;
  height: 40px;
  z-index: 3;
`;

export const EndButton = styled(RoundButton)`
  background: #ff1f33;
  border-color: transparent;

  &::before {
    content: none !important;
  }
  &::after {
    content: none !important;
  }
`;
