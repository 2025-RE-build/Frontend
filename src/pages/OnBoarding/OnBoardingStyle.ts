import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ff5fa4;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-bottom: 50px;
  //   padding: 12px 32px;
  width: 153px;
  height: 52px;
  border-radius: 30px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  background-color: #ffffff;
  color: #000;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
