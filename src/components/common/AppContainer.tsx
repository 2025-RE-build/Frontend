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

  /* 모바일 뷰포트에서 잘 보이도록 max-width 설정도 고려 가능 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default AppContainer;
