import styled from "styled-components";

export const Background = styled.div`
  background-color: black;
  width: 100%;
  height: 956px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

//프로필
export const ProfileIMG = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Letter_CHARCTER = styled.img`
  width: 100%;
  height: 100%;
`;

export const BACK = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const Profile = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  margin: 30px;
  padding-left: 10px;
  justify-content: start;

  align-items: center;
  gap: 20px;
`;

export const USERNAME = styled.div`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;

//제목부분
export const Community_titleBOX = styled.div`
  width: 354px;
  height: 120px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const community_titleAndImg = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const community_title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const ADD_IMG_button = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: none;
  }
`;

export const ADD_img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Title_Box = styled.input`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  color: #ff5fa2;
  height: 70px;
  background-color: white;
  border: 3px solid #ff5fa2;
  border-radius: 22px;
  vertical-align: top;
  padding: 20px 10px;
  text-align: left;
  line-height: 1.5;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
  :&: focus {
    outline: none;
    border-color: #ff5fa2;
  }
`;

//내용부분
export const INPUT_Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Community_ContentBOX = styled.div`
  width: 354px;
  height: 250px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

export const Community_Contenttitle = styled.div`
  width: 50px;
  height: 23px;
  font-size: 15px;
  font-weight: 600;
  padding: 0 10px;
  color: white;
`;

export const Content_Box = styled.textarea`
  width: 100%;
  height: 212px;
  font-size: 12px;
  font-weight: 400;
  color: #4b4b4b;
  background-color: white;
  border: 3px solid #ff5fa2;
  border-radius: 22px;
  padding: 10px;
  vertical-align: top;
  text-align: left;
  line-height: 1.5;
  resize: none;
  &::-webkit-scrollbar {
    display: none;
  }
  :&: focus {
    outline: none;
    border-color: #ff5fa2;
  }
`;

//버튼
export const Write_Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: #ff5fa2;
  border-radius: 33px;
  font-size: 14px;
  font-weight: 800;
  border: none;
  margin: 50px 0 20px 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: none;
  }
`;
