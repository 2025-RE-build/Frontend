import styled from "styled-components";

export const Card = styled.div<{ $large: boolean }>`
  position: relative;
  width: 100%;
  height: 134px;
  border-radius: 22px;
  padding: 20px 22px;
  overflow: hidden;

  background: transparent;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);

  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: rgb(110 110 110 / 28%);
    mix-blend-mode: multiply;
    opacity: 0.55;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;

    box-shadow: inset 6px 3px 14px rgba(255, 255, 255, 0.55),
      inset -8px -8px 18px rgb(255 121 189),
      inset 0 0 10px rgba(255, 255, 255, 0.18);

    background: radial-gradient(
      ellipse 130% 180% at 50% 35%,
      rgba(216, 198, 198, 0.55) 0%,
      rgba(241, 72, 151, 0.28) 45%,
      rgba(255, 139, 193, 0.06) 80%,
      rgba(238, 142, 188, 0) 100%
    );
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const Sections = styled.div`
  height: 134px;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
`;

export const BottomSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -4px;
    right: -4px;
    height: 1px;
    background: rgba(255, 255, 255, 0.85);
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const Value = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const BottomLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

export const BottomValue = styled.span`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.95;
  margin-left: 6px;
`;
