import { useNavigate } from "react-router-dom";
import * as S from "./MySecret.syle";

import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

import SecretLetterImg from "@/assets/Rebuild_character.svg";
import SecretLogoImg from "@/assets/Rebuild_logo_3.svg";
import Flower1 from "@/assets/five_leaf_flower.svg";
import Flower2 from "@/assets/four_leaf_flower.svg";
import Flower3 from "@/assets/five_leaf_flower_mini.svg";
import Flower4 from "@/assets/four_leaf_flower_start.svg";
import Flower5 from "@/assets/six_leaf_flower.svg";
import Flower6 from "@/assets/5_Dots.svg";
import Flower7 from "@/assets/five_leaf_flower.svg";
import Flower8 from "@/assets/5_Dots.svg";
import chatIcon from "@/assets/chat_icon_b.svg";
import letterIcon from "@/assets/mail_icon_b.svg";

export default function MySecret() {
  const navigate = useNavigate();

  const handleLettersClick = () => {
    navigate("/my-letters");
  };

  const handleCommentsClick = () => {
    navigate("/my-comments");
  };

  return (
    <S.Container>
      <Header />

      <S.ContentWrapper>
        <S.TopMessage>STEP BY STEP, YOU&apos;RE MOVING FORWARD!</S.TopMessage>

        <S.SecretArea>
          <S.BackLogo src={SecretLogoImg} alt="Re:Build 배경 로고" />

          <img src={Flower1} className="flower f1" />
          <img src={Flower2} className="flower f2" />
          <img src={Flower3} className="flower f3" />
          <img src={Flower4} className="flower f4" />
          <img src={Flower5} className="flower f5" />
          <img src={Flower6} className="flower f6" />
          <img src={Flower7} className="flower f7" />
          <img src={Flower8} className="flower f8" />

          <S.SpeechBubble>
            여기는 당신만 볼 수 있는 비밀 공간입니다!
          </S.SpeechBubble>

          <S.LetterCharacter src={SecretLetterImg} alt="비밀 편지 캐릭터" />

          <S.ButtonGroup>
            <S.ButtonWrapper>
              <S.SecretButton type="button" onClick={handleLettersClick}>
                <span>내가 쓴 편지모음</span>
                <img src={chatIcon} alt="편지" />
              </S.SecretButton>
            </S.ButtonWrapper>

            <S.ButtonWrapper>
              <S.SecretButton type="button" onClick={handleCommentsClick}>
                <span>내가 쓴 댓글모음</span>
                <img src={letterIcon} alt="댓글" />
              </S.SecretButton>
            </S.ButtonWrapper>
          </S.ButtonGroup>
        </S.SecretArea>
      </S.ContentWrapper>

      <NavBar />
    </S.Container>
  );
}
