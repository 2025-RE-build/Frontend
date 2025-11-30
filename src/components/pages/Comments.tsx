import React from "react";
import * as S from '../../styles/Comments';
import Header from "./Header";

import Letter_Char from '../../img/letter_charter.png'
import Back_white from '../../img/arrow_back_white.png';
import Comment from '../../img/chat_bubble.png';
import SEND from '../../img/send.png'
const Comments = () =>{

    return(
        <S.Background>
<Header/>

<S.Profile>
<S.BACK src={Back_white}/>
<S.ProfileIMG>
<S.Letter_CHARCTER src={Letter_Char}/>
</S.ProfileIMG>
<S.USERNAME>바그바그</S.USERNAME>
</S.Profile>
<S.INPUT_Box>
<S.Community_titleBOX>
    <S.community_titleAndImg>
        <S.community_title>제목</S.community_title>
      
    </S.community_titleAndImg>
    <S.Title_Box>
    "썸인 줄 알았는데 혼자였어요"
    </S.Title_Box>
</S.Community_titleBOX>

<S.Community_ContentBOX>
    <S.Community_Contenttitle>내용</S.Community_Contenttitle>

    <S.Content_Box >
    매일 톡하고, 서로 일상 공유하고, 잘 자라는 말까지 하길래 그냥… 나만 그런 게 아니라고 생각했어요. 근데 알고 보니 걔는 원래 다정한 성격이고, 나 혼자만 마음 키우고 있었더라고요. 친구한테 “걔 다른 사람이랑 사귄대”라는 소식 듣고 멘붕… 1인 썸도 썸인가요? 😂</S.Content_Box>
</S.Community_ContentBOX>
</S.INPUT_Box>

<S.Comments_Box>
<S.Comments_number>
    <S.Comment_img src={Comment}/>
    <p>34</p>
</S.Comments_number>

<S.CommentITEM>
<S.Comment_PRO>
<S.Letter_CHARCTER src={Letter_Char}/>
</S.Comment_PRO>
<S.Comment_Content>
    <S.NameAndDate>
    <S.Comment_UserName>무야호<S.Nim>님</S.Nim></S.Comment_UserName>
    <S.DATE>2025.07.10</S.DATE>
    </S.NameAndDate>
    <S.Comment>헉 저도 그런 경험있어요  진짜 멘붕..</S.Comment>
</S.Comment_Content>
</S.CommentITEM>

<S.CommentITEM>
<S.Comment_PRO>
<S.Letter_CHARCTER src={Letter_Char}/>
</S.Comment_PRO>
<S.Comment_Content>
    <S.NameAndDate>
    <S.Comment_UserName>냠냠쩝쩝<S.Nim>님</S.Nim></S.Comment_UserName>
    <S.DATE>2025.07.10</S.DATE>
    </S.NameAndDate>
    <S.Comment>그런 새끼들은 죽어여함</S.Comment>
</S.Comment_Content>
</S.CommentITEM>

<S.Input_Button>
    <p>입력하시오..</p>
    <S.InputImg src={SEND}></S.InputImg>
</S.Input_Button>
</S.Comments_Box>




    </S.Background>
    );

}
export default Comments;

