// import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import * as S from "@/styles/CommunityWrite";

import Letter_Char from "@/assets/letter_charter.svg";
import Back_white from "@/assets/arrow_back_white.svg";
import ADD_img from "@/assets/add_photo_alternate.svg";

const CommunityWrite = () => {
  const navigate = useNavigate();

  return (
    <S.Background>
      <Header />

      <S.Profile>
        <S.BACK
          src={Back_white}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <S.ProfileIMG>
          <S.Letter_CHARCTER src={Letter_Char} />
        </S.ProfileIMG>
        <S.USERNAME>바그바그</S.USERNAME>
      </S.Profile>
      <S.INPUT_Box>
        <S.Community_titleBOX>
          <S.community_titleAndImg>
            <S.community_title>제목</S.community_title>
            <S.ADD_IMG_button>
              <S.ADD_img src={ADD_img} />
            </S.ADD_IMG_button>
          </S.community_titleAndImg>
          <S.Title_Box></S.Title_Box>
        </S.Community_titleBOX>

        <S.Community_ContentBOX>
          <S.Community_Contenttitle>내용</S.Community_Contenttitle>

          <S.Content_Box></S.Content_Box>
        </S.Community_ContentBOX>
      </S.INPUT_Box>
      <S.Write_Button>글 작성하기</S.Write_Button>
    </S.Background>
  );
};

export default CommunityWrite;
