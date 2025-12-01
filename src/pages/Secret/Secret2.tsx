import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/styles/Secret2";

import Header from "@/components/Header";

import REBUILD_LOGO from "@/assets/Rebuild_logo_start.svg";
import Back from "@/assets/arrow_back_b.svg";
import Chat from "@/assets/mail_icon_b.svg";
import Delete from "@/assets/delete.svg";
import Go from "@/assets/arrow_pre.svg";

interface CommentData {
  id: number;
  postId: number;
  date: string;
  content: string;
}
const MOCK_COMMENTS: CommentData[] = [
  {
    id: 1,
    postId: 101,
    date: "2025.04.06",
    content: "와 진짜 공감가요. 저도 맨날 그렇게 회피했었어요",
  },
  {
    id: 2,
    postId: 102,
    date: "2025.04.06",
    content: "오 대박 저만 그런 줄 알았어요. ",
  },
  {
    id: 3,
    postId: 103,
    date: "2025.04.05",
    content: "이거 제가 쓴 글인 줄 알았어요 너무 힘들어요 다들 힘내세요!",
  },
  {
    id: 4,
    postId: 104,
    date: "2025.04.05",
    content: "와 진짜 레전드... 공감 버튼 누르고 갑니다. 모두 화이팅!",
  },
  {
    id: 5,
    postId: 105,
    date: "2025.04.04",
    content:
      "저는 결국 포기했어요. 너무 지치더라고요. 다른 분들은 꼭 성공하시길 바랍니다. 이 댓글 보고 조금이라도 힘이 됐으면 좋겠어요. 길게 썼는데 짤릴까요?",
  },
  {
    id: 6,
    postId: 106,
    date: "2025.04.03",
    content:
      "혹시 글쓴이님 상황이랑 비슷한데 다른 결과 냈던 분 계신가요? 조언 부탁드립니다.",
  },
  {
    id: 7,
    postId: 107,
    date: "2025.04.03",
    content: "댓글 잘 안 다는데 이건 진짜 남겨야겠어요. 덕분에 힘 얻고 갑니다!",
  },
];
const Big_Comment_Card: React.FC<{ data: CommentData }> = ({ data }) => (
  <S.Big_Comment_Card>
    <S.Middel_Card>
      <S.Small_Card>
        <S.DateAndDelete>
          <S.DATE>{data.date}</S.DATE>
          <S.DandG>
            <S.DELETE src={Delete} />
            <S.Go src={Go} />
          </S.DandG>
        </S.DateAndDelete>
        <S.Card_content>{data.content}</S.Card_content>
      </S.Small_Card>
    </S.Middel_Card>
  </S.Big_Comment_Card>
);

const Secret2 = () => {
  const navigate = useNavigate();

  const comments = MOCK_COMMENTS;

  return (
    <S.Background>
      <Header />
      <S.DIV>
        <S.LOGO src={REBUILD_LOGO} />
        <S.BACK
          src={Back}
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer" }}
        />
        <S.Chat src={Chat} />
        <S.Final_Box>
          <S.PinkBOX />
          <S.Circle_Box>
            <S.Final_Curtain /> <S.Final_Curtain /> <S.Final_Curtain />{" "}
            <S.Final_Curtain /> <S.Final_Curtain /> <S.Final_Curtain />
          </S.Circle_Box>
        </S.Final_Box>

        <S.Second_Box>
          <S.BlackBox />
          <S.Circle_Box>
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
            <S.Second_Curtain />
          </S.Circle_Box>
        </S.Second_Box>

        <S.First_Box>
          <S.PINK_BOX2 />
          <S.Circle_Box>
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
            <S.First_Curtain />
          </S.Circle_Box>
        </S.First_Box>
      </S.DIV>
      <S.List_Box>
        {comments.map((comment) => (
          <Big_Comment_Card key={comment.id} data={comment} />
        ))}
        {/*
            <S.Big_Comment_Card>
                <S.Middel_Card>
                    <S.Small_Card>
                        <S.DateAndDelete>
                        <S.DATE>2025.04.06</S.DATE>
                        <S.DandG>
                            <S.DELETE src={Delete}/>
                            <S.Go src={Go}/>
                        </S.DandG>
                        </S.DateAndDelete>
                        <S.Card_content>
                        와 진짜 공감이요 
                        제 전남친도 똑같이 그렇게 회피형이었어요 진짜 최악
                        </S.Card_content>
                    </S.Small_Card>
                </S.Middel_Card>
            </S.Big_Comment_Card>
*/}
      </S.List_Box>
    </S.Background>
  );
};

export default Secret2;
