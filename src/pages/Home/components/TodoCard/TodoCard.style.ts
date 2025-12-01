import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  background: #ffe2e9;
  border-radius: 40px;
  border: 1.5px solid #000;
  padding: 5px 10px 36px;
  margin-bottom: -24px;
  z-index: 2;
  margin: 0 20px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: "Rubik Gemstones", sans-serif;
  font-weight: 400;
  font-size: 40px;

  span:first-child {
    color: #000;
  }
`;

export const TitleLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  padding: 0 16px;

  border-radius: 50px;
  background: #000;
  border: 1px solid #ff5fa2;
  color: #fff;

  font-family: "Rubik Gemstones", sans-serif;
  font-size: 40px;
  line-height: 1;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemOuter = styled.div`
  width: 100%;
  border-radius: 30px;
  border: 1px solid #ff4fa0;
`;

export const ItemInner = styled.div`
  position: relative;
  height: 60px;
  border-radius: 30px;
  background: #ff4fa0;
  border: 2px solid #ffffff;

  display: flex;
  align-items: center;
  padding-left: 82px;
  padding-right: 24px;
`;

export const Check = styled.img`
  position: absolute;
  left: 0px;
  width: 56px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  color: #000;

  &:focus {
    outline: none;
  }
`;
