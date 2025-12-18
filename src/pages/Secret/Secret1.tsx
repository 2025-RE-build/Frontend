import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Secret/Secret2style";

import Header from "@/components/Header/Header";

import REBUILD_LOGO from "@/assets/Rebuild_logo_start.svg";
import Back from "@/assets/arrow_back_b.svg";
import Chat from "@/assets/mail_icon_b.svg";
import Delete from "@/assets/delete.svg";
import Go from "@/assets/arrow_pre.svg";

import { getMyComments, deleteComment } from "@/utils/api";
import type { CommentResponse } from "@/types/api";

interface CommentData {
  id: number;
  postId: number;
  date: string;
  content: string;
}

interface BigCommentCardProps {
  data: CommentData;
  onDelete: (id: number) => void;
  onGo: (postId: number) => void;
}

// 개별 카드
const Big_Comment_Card: React.FC<BigCommentCardProps> = ({
  data,
  onDelete,
  onGo,
}) => (
  <S.Big_Comment_Card>
    <S.Middel_Card>
      <S.Small_Card>
        <S.DateAndDelete>
          <S.DATE>{data.date}</S.DATE>
          <S.DandG>
            <S.DELETE
              src={Delete}
              onClick={() => onDelete(data.id)}
              style={{ cursor: "pointer" }}
            />
            <S.Go
              src={Go}
              onClick={() => onGo(data.postId)}
              style={{ cursor: "pointer" }}
            />
          </S.DandG>
        </S.DateAndDelete>
        <S.Card_content>{data.content}</S.Card_content>
      </S.Small_Card>
    </S.Middel_Card>
  </S.Big_Comment_Card>
);

const Secret2: React.FC = () => {
  const navigate = useNavigate();

  const [comments, setComments] = useState<CommentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 내가 쓴 댓글 목록 조회
  useEffect(() => {
    const fetchMyComments = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMyComments();

        const mapped: CommentData[] = data.map((item: CommentResponse) => {
          const created = new Date(item.createdAt);

          const dateStr = `${created.getFullYear()}.${String(
            created.getMonth() + 1
          ).padStart(2, "0")}.${String(created.getDate()).padStart(2, "0")}`;

          return {
            id: item.id,
            postId: item.postId,
            content: item.content,
            date: dateStr,
          };
        });

        setComments(mapped);
      } catch (err) {
        console.error(err);
        setError("내가 쓴 댓글들을 불러오는 중 오류가 발생했어요.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMyComments();
  }, []);

  // 댓글 삭제
  const handleDelete = async (commentId: number) => {
    const ok = window.confirm("정말 이 댓글을 삭제할까요?");
    if (!ok) return;

    try {
      await deleteComment(commentId);
      setComments((prev) => prev.filter((c) => c.id !== commentId));
    } catch (err) {
      console.error(err);
      setError("댓글 삭제 중 오류가 발생했어요.");
    }
  };

  // 해당 글로 이동
  const handleGo = (postId: number) => {
    navigate(`/community/comments/${postId}`);
  };

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
        {isLoading && <p>내가 쓴 댓글들을 불러오는 중이에요…</p>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && !error && comments.length === 0 && (
          <p>아직 작성한 댓글이 없어요.</p>
        )}
        {!isLoading &&
          !error &&
          comments.map((comment) => (
            <Big_Comment_Card
              key={comment.id}
              data={comment}
              onDelete={handleDelete}
              onGo={handleGo}
            />
          ))}
      </S.List_Box>
    </S.Background>
  );
};

export default Secret2;
