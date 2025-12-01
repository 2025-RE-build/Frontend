import * as S from "@/pages/Letter/LetterSelectPage.style";

import wave1 from "@/assets/wave_background.svg";
import wave2 from "@/assets/wave_background_black.svg";

export default function WaveBanner() {
  return (
    <S.WaveWrapper>
      <S.WaveImage1 src={wave1} alt="wave1" />
      <S.WaveImage2 src={wave2} alt="wave2" />
      <S.WaveImage3 src={wave1} alt="wave3" />
    </S.WaveWrapper>
  );
}
