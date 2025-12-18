import styled from "styled-components";

export const Background = styled.div`
  // background-color: black;
  // width: 400px;
  // height: 956px;
  // overflow-y: scroll;
  // overflow-x: hidden;
  // display: flex;
  // flex-direction: column;
  // position: relative;
  // scrollbar-width: none;
  // align-items: center;
  background-color: #000;
  width: 100%;
  min-height: 956px;
  // overflow: hidden;
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

export const Title_Box = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  display: flex;

  color: #ff5fa2;
  height: 70px;
  background-color: white;
  border: 3px solid #ff5fa2;
  border-radius: 22px;
  align-items: center;
  justify-content: left;
  padding: 15px;
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
  max-height: 250px;
  margin-bottom: 90px;
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

export const Content_Box = styled.div`
  width: 100%;
  height: 152pxpx;
  font-size: 12px;
  font-weight: 400;
  color: #4b4b4b;
  background-color: white;
  border: 3px solid #ff5fa2;
  border-radius: 22px;
  padding: 15px;
  text-align: left;
  overflow-y: scroll;
  scrollbar-width: none;
`;

//댓글
export const Comments_Box = styled.div`
  width: 100%;
  flex: 1; /* 🔥 남은 전체 공간 채우기 */
  overflow-y: auto; /* 🔥 댓글 영역만 스크롤 */
  padding-bottom: 120px; /* 🔥 입력창에 가리지 않게 여유 */
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Comments_number = styled.div`
  height: 24px;
  font-size: 15px;
  width: 100%;
  color: white;
  font-weight: 600;
  display: flex;
  gap: 5px;
  flex-direction: row;
  padding-left: 10px;
  margin-bottom: 5px;
`;

export const Comment_img = styled.img`
  width: 24px;
  height: 24px;
`;

export const CommentITEM = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 12px;
  border-top: 1px solid #9d9d9d;
`;

export const Comment_PRO = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
`;

export const Comment_Content = styled.div`
  width: 316px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const NameAndDate = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;

export const Comment_UserName = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 600;
  height: 14px;
`;

export const Nim = styled.span`
  color: #9d9d9d;
  font-size: 12px;
  font-weight: 600;
  height: 14px;
`;

export const DATE = styled.div`
  color: #9d9d9d;
  height: 11px;
  font-size: 11px;
  font-weight: 500;
`;

export const Comment = styled.div`
  width: 100%;
  min-height: 48px;
  display: flex;
  padding: 0 20px;
  justify-content: start;
  align-items: center;
  font-size: 12px;
  color: black;
  background-color: white;
  font-weight: 500;
  border-radius: 24px;
  border: 1px solid #9d9d9d;
`;

//입력하시오 버튼
export const Input_BottonWrapper = styled.div`
  width: 400px;
  height: 100px;
  background-color: #000;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Input_Button = styled.button`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 373px;
  min-height: 67px;
  border-radius: 33px;
  background-color: #ffc4d1;
  font-size: 14px;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  margin: 10px 0 20px 0;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: none;
  }
`;

export const InputImg = styled.img`
  width: 17px;
  height: 15px;
`;

export const MARGIN = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: hotpink;
`;
