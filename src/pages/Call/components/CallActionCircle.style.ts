import styled from "styled-components";

export const Row = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  gap: 18px;
`;

export const Button = styled.button`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  padding: 0;
  overflow: hidden;

  background: transparent;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.9);

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: rgb(110 110 110 / 28%);
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

  &:active {
    transform: translateY(1px) scale(0.96);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35),
      0 0 14px rgba(255, 255, 255, 0.3);
  }
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  pointer-events: none;
  position: relative;
  z-index: 1;
`;

export const Label = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.85);
  text-align: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
