import { useState } from "react";
import * as S from "@/pages/Call/Calling.style";

import speakerIcon from "@/assets/brand_awareness.svg";
import videoIcon from "@/assets/duo_icon.svg";
import soundoffIcon from "@/assets/mic_off.svg";
import moreIcon from "@/assets/more_horiz.svg";
import doneIcon from "@/assets/call_end.svg";
import dialIcon from "@/assets/dialpad.svg";

export default function CallScreen() {
  const [isEnded, setIsEnded] = useState(false);

  const handleEndClick = () => {
    setIsEnded(true);
  };

  return (
    <S.Container>
      <S.TopInfo $ended={isEnded}>
        <p>{isEnded ? "통화 종료" : "연결중..."}</p>
        <h1>EX</h1>
      </S.TopInfo>

      <S.ButtonArea $ended={isEnded}>
        <S.ButtonRow>
          <S.RoundButton type="button">
            <S.IconImg src={speakerIcon} alt="스피커 아이콘" />
          </S.RoundButton>

          <S.RoundButton type="button">
            <S.IconImg src={videoIcon} alt="영상 통화 아이콘" />
          </S.RoundButton>

          <S.RoundButton type="button">
            <S.IconImg src={soundoffIcon} alt="마이크 끄기 아이콘" />
          </S.RoundButton>
        </S.ButtonRow>

        <S.ButtonRow>
          <S.RoundButton type="button">
            <S.IconImg src={moreIcon} alt="더보기 아이콘" />
          </S.RoundButton>

          <S.EndButton
            type="button"
            onClick={handleEndClick}
            disabled={isEnded}
          >
            <S.IconImg src={doneIcon} alt="통화 종료 아이콘" />
          </S.EndButton>

          <S.RoundButton type="button">
            <S.IconImg src={dialIcon} alt="키패드 아이콘" />
          </S.RoundButton>
        </S.ButtonRow>
      </S.ButtonArea>
    </S.Container>
  );
}
