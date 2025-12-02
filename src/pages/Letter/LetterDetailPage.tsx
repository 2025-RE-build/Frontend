import * as S from "@/pages/Letter/LetterDetailPage.style";
import { useNavigate } from "react-router-dom";

import Header from "@/components/Header/Header";

import rebuildLogo from "@/assets/Rebuild_logo_start.svg";
import arrowBack from "@/assets/arrow_back_b.svg";

export default function LetterDetailPage() {
  const navigate = useNavigate();

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
            <S.TextArea placeholder="하고 싶은 말을 편하게 적어 보세요 :)" />
            <S.LineList>
              {Array.from({ length: 20 }).map((_, idx) => (
                <S.LineRow key={idx} />
              ))}
            </S.LineList>
          </S.LetterBody>
        </S.LeftInner>
      </S.ContentWrapper>
    </S.Container>
  );
}
