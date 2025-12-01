// 온보딩(소개)-1
import * as S from "./Onboard.style";

import CharacterImg from "@/assets/Rebuild_character.svg";

export default function Onboard2() {
  return (
    <S.Wrapper>
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>
      <S.SpeechBubble className="speech1">
        <div>흘려보내고, 다시 세워가는 시간.. </div>
        <div className="black"> 함께해요 회원님</div>
        <div>!</div>
        <S.SpeechTail />
      </S.SpeechBubble>
      <S.RebuildCharacter src={CharacterImg} alt="character" />
    </S.Wrapper>
  );
}
