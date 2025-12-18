import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "@/pages/Home/Start.style";
import { saveBreakup } from "@/lib/api";
import { ApiError } from "@/utils/api";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";

import startLogoImg from "@/assets/Rebuild_logo_start.svg";
import arrowBack from "@/assets/arrow_back.svg";
import Flower1 from "@/assets/five_leaf_flower.svg";
import Flower2 from "@/assets/four_leaf_flower.svg";
import Flower3 from "@/assets/five_leaf_flower_mini.svg";
import Flower4 from "@/assets/four_leaf_flower_start.svg";
import Flower5 from "@/assets/six_leaf_flower.svg";
import Flower6 from "@/assets/5_Dots.svg";

export default function Home() {
  const navigate = useNavigate();

  const [reason, setReason] = useState<string>("");
  const [breakupDate, setBreakupDate] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSaveClick = async () => {
    if (!reason.trim()) {
      alert("이별 이유를 입력해 주세요.");
      return;
    }
    if (!breakupDate) {
      alert("이별 날짜를 선택해 주세요.");
      return;
    }

    try {
      setIsSubmitting(true);
      await saveBreakup({
        reason: reason.trim(),
        breakupDate,
      });

      navigate("/mainpage");
    } catch (error) {
      if (error instanceof ApiError) {
        console.error("이별 정보 저장 실패:", error.status, error.message);
        alert("이별 정보를 저장하는 중 오류가 발생했어요. 다시 시도해 주세요.");
      } else {
        console.error(error);
        alert("알 수 없는 오류가 발생했어요.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.Container>
      <Header />

      <S.ContentWrapper>
        <S.TopMessage>STEP BY STEP, YOU&apos;RE MOVING FORWARD!</S.TopMessage>

        <S.TopBar>
          <S.BackBtn type="button" onClick={() => navigate(-1)}>
            <img src={arrowBack} alt="뒤로 가기" />
          </S.BackBtn>
          <S.startLogo src={startLogoImg} alt="Re:Build 로고" />
        </S.TopBar>

        <S.BodySection>
          <img src={Flower1} className="flower f1" />
          <img src={Flower2} className="flower f2" />
          <img src={Flower3} className="flower f3" />
          <img src={Flower4} className="flower f4" />
          <img src={Flower5} className="flower f5" />
          <img src={Flower6} className="flower f6" />
          <img src={Flower6} className="flower f6--bottom" />

          <S.QuestionCard>
            <S.QuestionTitle>
              상대방과 헤어진 이유는 무엇인가요 ?
            </S.QuestionTitle>
            <S.Input
              placeholder="입력하세요..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </S.QuestionCard>

          <S.QuestionCard>
            <S.QuestionTitle>언제 헤어졌나요 ?</S.QuestionTitle>
            <S.Input
              type="date"
              value={breakupDate}
              onChange={(e) => setBreakupDate(e.target.value)}
            />
          </S.QuestionCard>

          <S.SaveButton onClick={handleSaveClick} disabled={isSubmitting}>
            {isSubmitting ? "SAVING..." : "SAVE"}
          </S.SaveButton>
        </S.BodySection>
      </S.ContentWrapper>

      <NavBar />
    </S.Container>
  );
}
