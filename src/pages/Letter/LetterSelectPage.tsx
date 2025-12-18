import * as S from "@/pages/Letter/LetterSelectPage.style";
import { useNavigate } from "react-router-dom";

import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import WaveBanner from "@/pages/Letter/components/WaveBanner";

import chatIcon from "@/assets/chat_icon.svg";
import mailIcon from "@/assets/mail_icon.svg";
import CharacterImg from "@/assets/Rebuild_character.svg";
import Flower1 from "@/assets/four_leaf_flower_letter.svg";
import Flower2 from "@/assets/six_leaf_flower.svg";
import Flower3 from "@/assets/four_leaf_flower.svg";
import Flower4 from "@/assets/five_leaf_flower_mini.svg";

export default function LetterSelectPage() {
  const navigate = useNavigate();

  const handleLetterClick = () => {
    navigate("/letterwrite");
  };

  const handleKakaoClick = () => {
    navigate("/kakao");
  };

  return (
    <S.Container>
      <Header />
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>

      <S.FlowerLayer>
        <img src={Flower1} className="flower f1" />
        <img src={Flower2} className="flower f2" />
        <img src={Flower3} className="flower f3" />
        <img src={Flower4} className="flower f4" />
      </S.FlowerLayer>

      <WaveBanner />

      <S.SpeechBubble>
        <div>편지쓰기, 메세지 보내기 </div>
        <div className="black">중에 하나를 선택해주세요!</div>
        <S.SpeechTail />
      </S.SpeechBubble>

      <S.CharacterBox>
        <img src={CharacterImg} alt="Rebuild_Char" />
      </S.CharacterBox>

      <S.ButtonRow>
        <S.GlassCircle onClick={handleKakaoClick}>
          <img src={chatIcon} alt="메세지 보내기" />
        </S.GlassCircle>

        <S.GlassCircle onClick={handleLetterClick}>
          <img src={mailIcon} alt="편지쓰기" />
        </S.GlassCircle>
      </S.ButtonRow>

      <NavBar />
    </S.Container>
  );
}
