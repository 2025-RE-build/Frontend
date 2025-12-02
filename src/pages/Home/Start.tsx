import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Home/Start.style";

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

  const handleSaveClick = () => {
    navigate("/mainpage");
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
            <S.Input placeholder="입력하세요..." />
          </S.QuestionCard>

          <S.QuestionCard>
            <S.QuestionTitle>언제 헤어졌나요 ?</S.QuestionTitle>
            <S.Input placeholder="입력하세요..." />
          </S.QuestionCard>

          <S.SaveButton onClick={handleSaveClick}>SAVE</S.SaveButton>
        </S.BodySection>
      </S.ContentWrapper>

      <NavBar />
    </S.Container>
  );
}
