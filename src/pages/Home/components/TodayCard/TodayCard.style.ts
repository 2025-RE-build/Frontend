import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  margin: 80px 16px 0;
  padding: 32px 20px;
  // width: 369px;
  // height: 119px;
  background-color: #000000;
  border-radius: 16px;
  border: 3px solid #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.div`
  position: absolute;
  top: -87px;
  left: 50%;
  transform: translateX(-50%);

  .logo {
    height: auto;
    pointer-events: none;
  }
`;

export const Message = styled.p`
  margin: 0;
  text-align: center;
  color: #ffffff;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  line-height: 1.6;
  font-weight: 700;
`;
