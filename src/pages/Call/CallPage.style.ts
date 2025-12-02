import styled from "styled-components";
import callingBackground from "@/assets/callingBackground.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url(${callingBackground}) no-repeat center center;
  background-size: cover;
  overflow: hidden;
`;

export const PageBody = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0 16px 24px;
`;

export const GradientArea = styled.section`
  width: 100%;
  max-width: 430px;
  margin-top: 12px;
  margin-bottom: 8px;
  position: relative;
  padding: 56px 20px 120px;
  box-sizing: border-box;
  color: #ffffff;
`;

export const EditBadge = styled.button`
  position: absolute;
  top: 8px;
  right: 3px;
  width: 71px;
  height: 37px;
  z-index: 10;

  border-radius: 65px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.9);

  font-size: 13px;
  font-weight: 600;
  color: #000;

  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 4px 3px 12px rgba(255, 255, 255, 0.9),
      inset 0 0 28px rgba(255, 140, 190, 0.55);
    pointer-events: none;
  }
`;

export const ProfileCircle = styled.div`
  position: relative;
  width: 210px;
  height: 210px;
  margin: 0 auto;
  border-radius: 50%;
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
    background: rgb(110 110 110 / 30%);
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

    box-shadow: inset 4px 2px 25px rgb(255 255 255 / 55%),
      inset -6px -6px 14px rgb(255 121 189),
      inset 0 0 6px rgba(255, 255, 255, 0.18);
  }
`;

export const ProfileInitial = styled.span`
  font-size: 96px;
  font-family: "Rubik Mono One", sans-serif;
  color: #ffffff;
  z-index: 5;
`;

export const ProfileName = styled.div`
  margin-top: 12px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.08em;
`;

export const InfoList = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const EditDropdown = styled.div`
  position: absolute;
  top: 52px;
  right: 3px;
  width: 260px;
  min-height: 260px;

  border-radius: 32px;
  padding: 22px 18px 20px 22px;
  box-sizing: border-box;
  overflow: hidden;

  background: transparent;
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.95);

  display: flex;
  flex-direction: column;
  gap: 18px;

  color: #ffffff;
  z-index: 30;

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

    box-shadow: inset 6px 4px 18px rgba(255, 255, 255, 0.75),
      inset -10px -10px 24px rgba(255, 120, 190, 0.85),
      inset 0 0 12px rgba(255, 255, 255, 0.25);
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export const EditRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 42px;
  align-items: center;
  column-gap: 14px;
`;

export const EditDropName = styled.div`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding-left: 8px;
`;

export const EditPreviewBox = styled.div`
  width: 155px;
  height: 82px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.95);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  letter-spacing: 0.04em;

  background: rgba(0, 0, 0, 0.18);
`;

export const EditDropPhone = styled.div`
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding-left: 8px;
`;

export const EditIconCircle = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  padding: 0;

  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const EditIconImg = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`;

export const CloseRow = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const CloseIconCircle = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  padding: 0;

  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const CloseIconImg = styled.img`
  width: 42px;
  height: 42px;
  object-fit: contain;
`;
