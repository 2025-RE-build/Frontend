import styled from "styled-components";

export const Background = styled.div`
  background-color: #ffc4d1;
  width: 100%;
  min-height: 956px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const Circle_Box = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const PinkBOX = styled.div`
  width: 100%;
  height: 70px;
  background-color: #ff5fa4;
  z-index: 7;
`;

export const BlackBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;

  z-index: 5;
`;

export const PINK_BOX2 = styled.div`
  width: 100%;
  height: 110px;
  background-color: #ff5fa4;
  z-index: 1;
`;

export const Final_Curtain = styled.div`
  width: 75px;
  height: 37.5px;
  background-color: #ff5fa4;
  border: 1px solid black;
  border-top: none;

  border-bottom-left-radius: 37.5px;
  border-bottom-right-radius: 37.5px;
`;

export const Second_Curtain = styled.div`
  width: 75px;
  height: 37.5px;
  background-color: black;
  border: 1px solid black;
  border-top: none;

  border-bottom-left-radius: 37.5px;
  border-bottom-right-radius: 37.5px;
  z-index: 10;
`;

export const First_Curtain = styled.div`
  width: 75px;
  height: 37.5px;

  border: 1px solid black;
  border-top: none;

  border-bottom-left-radius: 37.5px;
  border-bottom-right-radius: 37.5px;
  background-color: #ff5fa4;
  z-index: 1;
`;

export const Final_Box = styled.div`
  position: absolute;
  z-index: 12;
`;

export const Second_Box = styled.div`
  position: absolute;
  z-index: 10;
  padding-top: 20px;
`;

export const First_Box = styled.div`
  position: absolute;
  z-index: 2;
  padding-top: 20px;
`;

export const DIV = styled.div`
  width: 100%;
  min-height: 170px;
  z-index: 10;
  position: relative;
`;

//로고
export const LOGO = styled.img`
  width: 190px;
  height: 190px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
  z-index: 15;
`;

export const BACK = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: 15;
  left: 20px;
  top: 30px;
  cursor: pointer;
`;

export const Chat = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  position: absolute;
  z-index: 15;
  left: 50px;
  top: 30px;
`;

//리스트
export const List_Box = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 0 35px;
  margin-top: 20px;
`;

export const Big_Comment_Card = styled.div`
  width: 100%;

  min-height: 110px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ff5fa2;
  border: 1.3px solid #000000;
  border-radius: 19px;
  margin-bottom: 20px;
`;

export const Middel_Card = styled.div`
  width: 320px;
  min-height: 103px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1.3px solid #000000;
  border-radius: 19px;
`;

export const Small_Card = styled.div`
  width: 310px;
  gap: 20px;
  min-height: 95px;
  max-height: 95px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #ffc4d1;
  border: 1.3px solid #000000;
  border-radius: 19px;
  padding: 10px 15px;
`;

export const DateAndDelete = styled.div`
  width: 100%;
  min-height: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DATE = styled.div`
  font-size: 11px;
  font-weight: 700;
  width: 100%;
  height: 13px;
  text-align: start;
`;

export const DandG = styled.div`
  height: 15px;
  gap: 5px;
  display: flex;
  align-items: center;
`;

export const DELETE = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Go = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Card_content = styled.p`
  width: 100%;
  height: 25px;
  text-align: start;
  font-size: 7px;
  font-weight: 700;
  color: black;
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;
