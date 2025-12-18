import styled from "styled-components";

export const Background = styled.div`
  background-color: #ffc4d1;
  width: 400px;
  height: 500px; //956에서 수정함
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const NewPost_BigBox = styled.div`
  margin-top: 50px;
  width: 360px;
  height: 330px;
`;

export const NewPost_Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: start;
  padding: 0 15px;
`;

export const NEWPOST_titleimg = styled.img`
  width: 110px;
  height: 24px;
`;

export const Hot_img = styled.img`
  width: 23px;
  height: 27px;
`;

export const NewPost_Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 309px;
  margin-top: 15px;
  border-radius: 31px;
  border: 1px solid #b0b9c2;
  box-shadow: 0px 8px 10px -6px #b0b9c2;
  position: relative;

  overflow: hidden;
`;

export const PRE_img = styled.img`
  width: 14px;
  height: 14px;
  position: absolute;
  right: 15px;
  top: 15px;
`;

export const NewPosts = styled.div`
  width: 100%;
  height: 103px;
  border-bottom: 1px solid #b0b9c2;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  word-wrap: break-word;
`;

export const New_title = styled.div`
  min-height: 14px;
  font-weight: 600;
  color: #ff5fa2;
  font-size: 14px;
  padding-right: 20px;
`;

export const POST_content_box = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 65px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const POST_content = styled.p`
  font-weight: 400;
  text-align: left;

  height: 100%;
  width: 100%;
  color: #b0b9c2;
  font-size: 10px;
  line-height: 1.4; /* 줄 간격을 설정하여 가독성 확보 */

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical;
`;

//버튼
export const Write_Button = styled.button`
  width: 150px;
  height: 60px;
  background-color: white;
  border-radius: 33px;
  font-size: 14px;
  font-weight: 800;
  border: none;
  margin: 50px 0 20px 0;

  &:focus {
    outline: none;
  }
  &:hover {
    border-color: none;
    background-color: #ff5fa2;
  }
`;
