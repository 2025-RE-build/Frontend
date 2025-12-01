import styled from "styled-components";
import React from "react";

// 공통 레이아웃 스타일 정의
const StyledContainer = styled.div`
  width: 400px;
  height: 956px;
  margin: 0 auto;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  border: 1.5px solid rgba(0, 0, 0, 0.25);
`;

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default AppContainer;
