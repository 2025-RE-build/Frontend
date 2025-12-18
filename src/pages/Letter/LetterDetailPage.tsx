import * as S from "@/pages/Letter/LetterDetailPage.style";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import type { ChangeEvent } from "react";

import Header from "@/components/Header/Header";

import rebuildLogo from "@/assets/Rebuild_logo_start.svg";
import arrowBack from "@/assets/arrow_back_b.svg";

type LetterLocationState = {
  letterText?: string;
  toName?: string;
  fromName?: string;
};

export default function LetterDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LetterLocationState | null;

  const toName = state?.toName ?? "";
  const fromName = state?.fromName ?? "";

  const [letterText, setLetterText] = useState<string>(state?.letterText ?? "");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setLetterText(e.target.value);
  };

  const handleSave = () => {
    navigate("/letterwrite", {
      state: {
        letterText,
        toName,
        fromName,
      },
      replace: true, // 히스토리 쌓고 싶으면 이 줄은 빼도 됨
    });
  };

  return (
    <S.Container>
      <Header />
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>

      <S.ContentWrapper>
        <S.LeftInner>
          <S.TopBar>
            <S.BackBtn type="button" onClick={() => navigate(-1)}>
              <img src={arrowBack} alt="뒤로 가기" />
            </S.BackBtn>
            <S.startLogo src={rebuildLogo} alt="Re:Build 로고" />
          </S.TopBar>

          <S.LetterBody>
            <S.TextArea
              value={letterText}
              onChange={handleChange}
              placeholder="하고 싶은 말을 편하게 적어 보세요 :)"
            />

            <S.LineList>
              {Array.from({ length: 20 }).map((_, idx) => (
                <S.LineRow key={idx} />
              ))}
            </S.LineList>

            <S.SaveRow>
              <S.SaveButton type="button" onClick={handleSave}>
                저장하기
              </S.SaveButton>
            </S.SaveRow>
          </S.LetterBody>
        </S.LeftInner>
      </S.ContentWrapper>
    </S.Container>
  );
}
