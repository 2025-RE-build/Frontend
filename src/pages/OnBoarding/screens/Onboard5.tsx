// 온보딩(소개)-4
import * as S from "@/pages/OnBoarding/screens/Onboard.style";

import RebuildLogo from "@/assets/Rebuild_logo_3.svg";

export default function Onboard3() {
  return (
    <S.Wrapper>
      <S.TopMessage>STEP BY STEP, YOU’RE MOVING FORWARD!</S.TopMessage>

      <S.LogoBox>
        <S.RebuildCrush src={RebuildLogo} alt="RE:build" />
        <S.OverlayText>“YOU'RE NOT ALONE”</S.OverlayText>
      </S.LogoBox>

      <S.SpeechHead />
      <S.SpeechBubble className="speech2">
        <div>한 걸음씩, 함께 나아가요!</div>
      </S.SpeechBubble>
    </S.Wrapper>
  );
}
