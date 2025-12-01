// 온보딩(소개)-3
import * as S from "./Onboard.style";

import Phone3 from "@/assets/phone_ob_3.svg";
import Phone4 from "@/assets/phone_ob_4.svg";

export default function Onboard3() {
  return (
    <S.Wrapper>
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>
      <S.SpeechBubble className="speech3">
        주 회복 미션 추천과 커뮤니티를 통해 <br />
        당신의 <span className="black">일상을 단단하게</span> 만들어요!
        <S.SpeechTail />
      </S.SpeechBubble>
      <S.MockUp>
        <img src={Phone3} className="phone p3" alt="letter" />
        <img src={Phone4} className="phone p4" alt="letter" />
      </S.MockUp>
    </S.Wrapper>
  );
}
