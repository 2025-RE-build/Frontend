import styled from "styled-components";

export const BarWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

export const BarBackground = styled.div`
  width: 345px;
  height: 30px;
  border-radius: 32px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 4px;
`;

export const BarFill = styled.div`
  height: 100%;
  background-color: #ff5fa4;
  border-radius: 50px;
  transition: width 0.4s ease;
`;
