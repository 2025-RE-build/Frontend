// src/pages/Call/CallPage.style.ts
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000; /* 위에 헤더랑 밑에 네비랑 대비용 */
  display: flex;
  flex-direction: column;
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
  border-radius: 24px 24px 0 0;
  background: linear-gradient(180deg, #ff82c5 0%, #ff6aa4 35%, #ff4f90 100%);
  position: relative;
  padding: 56px 20px 120px;
  box-sizing: border-box;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  color: #ffffff;
`;

export const EditBadge = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 6px 14px;
  border-radius: 999px;
  border: none;
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

export const ProfileCircle = styled.div`
  width: 190px;
  height: 190px;
  margin: 0 auto;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 20%,
    #ffffff,
    #ff5ba7 60%,
    #ff2f8b 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.5);
`;

export const ProfileInitial = styled.span`
  font-size: 96px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
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
