// 온보딩(소개)-2
import * as S from "./Onboard.style";

import Phone1 from "@/assets/phone_ob_1.svg";
import Phone2 from "@/assets/phone_ob_2.svg";

export default function Onboard3() {
  return (
    <S.Wrapper>
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>
      <S.SpeechBubble className="speech3">
        편지쓰기, 통화시물, 감정기록으로 <br />
        지금의 <span className="black">마음을 가볍게</span> 만들어요!
        <S.SpeechTail />
      </S.SpeechBubble>
      <S.MockUp>
        <img src={Phone1} className="phone p1" alt="letter" />
        <img src={Phone2} className="phone p2" alt="letter" />
      </S.MockUp>
    </S.Wrapper>
  );
}
