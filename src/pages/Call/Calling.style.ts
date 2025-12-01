import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 90px 0 150px;
  background: radial-gradient(
      circle at 87% 33%,
      rgb(174 0 80 / 85%) 0%,
      rgba(255, 70, 160, 0.72) 36%,
      rgba(255, 120, 185, 0.35) 69%,
      rgba(255, 175, 210, 0.18) 104%,
      rgba(255, 220, 235, 0.05) 106%,
      rgba(255, 255, 255, 0) 120%
    ),
    linear-gradient(
      180deg,
      rgba(255, 240, 250, 0.65) 0%,
      rgba(255, 170, 210, 0.35) 30%,
      rgba(255, 140, 180, 0.22) 60%,
      rgba(255, 190, 220, 0.1) 80%,
      rgba(255, 255, 255, 0.05) 100%
    );

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.25);

  overflow: hidden;
`;

export const TopInfo = styled.section`
  position: relative;
  text-align: center;
  color: #ffffff;
  z-index: 1;
  margin-top: 60px;

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

export const ButtonArea = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  outline: none;
`;

export const IconImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const EndButton = styled(RoundButton)`
  background: #ff1f33;
  border-color: transparent;
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.35);
`;
