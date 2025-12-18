import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Secret/Secret2style";

import Header from "@/components/Header/Header";

import REBUILD_LOGO from "@/assets/Rebuild_logo_start.svg";
import Back from "@/assets/arrow_back_b.svg";
import Chat from "@/assets/mail_icon_b.svg";
import Delete from "@/assets/delete.svg";
import Go from "@/assets/arrow_pre.svg";

import { getMyLetters, deleteLetter } from "@/utils/api";
import type { Letter } from "@/types/api";

interface LetterCardProps {
  letter: Letter;
  onClickDetail: (id: number) => void;
  onClickDelete: (id: number) => void;
}

const LetterCard: React.FC<LetterCardProps> = ({
  letter,
  onClickDetail,
  onClickDelete,
}) => {
  const createdDate = new Date(letter.createdAt);
  const dateText = `${createdDate.getFullYear()}.${String(
    createdDate.getMonth() + 1
  ).padStart(2, "0")}.${String(createdDate.getDate()).padStart(2, "0")}`;

  return (
    <S.Big_Comment_Card>
      <S.Middel_Card>
        <S.Small_Card>
          <S.DateAndDelete>
            <S.DATE>{dateText}</S.DATE>
            <S.DandG>
              <S.DELETE
                src={Delete}
                onClick={() => onClickDelete(letter.id)}
                style={{ cursor: "pointer" }}
              />
              <S.Go
                src={Go}
                onClick={() => onClickDetail(letter.id)}
                style={{ cursor: "pointer" }}
              />
            </S.DandG>
          </S.DateAndDelete>

          <S.Card_content>{letter.content}</S.Card_content>
        </S.Small_Card>
      </S.Middel_Card>
    </S.Big_Comment_Card>
  );
};

const Secret2: React.FC = () => {
  const navigate = useNavigate();
  const [letters, setLetters] = useState<Letter[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        setLoading(true);
        const data = await getMyLetters();
        setLetters(data);
      } catch (error) {
        console.error("편지 목록 조회 실패:", error);
        alert("편지 목록을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchLetters();
  }, []);

  const handleClickDetail = (letterId: number) => {
    navigate(`/my-letters/${letterId}`);
  };

  const handleDeleteLetter = async (letterId: number) => {
    const confirmed = window.confirm("이 편지를 정말 삭제할까요?");
    if (!confirmed) return;

    try {
      await deleteLetter(letterId);
      setLetters((prev) => prev.filter((l) => l.id !== letterId));
    } catch (error) {
      console.error("편지 삭제 실패:", error);
      alert("편지를 삭제하는 중 오류가 발생했습니다.");
    }
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
        {loading && <div>불러오는 중...</div>}
        {!loading && letters.length === 0 && (
          <div>아직 저장된 편지가 없어요.</div>
        )}
        {!loading &&
          letters.map((letter) => (
            <LetterCard
              key={letter.id}
              letter={letter}
              onClickDetail={handleClickDetail}
              onClickDelete={handleDeleteLetter}
            />
          ))}
      </S.List_Box>
    </S.Background>
  );
};

export default Secret2;
