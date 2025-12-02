import * as S from "@/pages/Home/components/SinceCard/SinceCard.style";

import sinceBg from "@/assets/since_broken.svg";
import sinceLogo from "@/assets/Rebuild_logo_3.svg";

export default function SinceCard() {
  return (
    <S.Wrapper>
      <S.TodoCardPart />
      <S.BgImage src={sinceBg} alt="배경" />
      <S.LogoImage src={sinceLogo} alt="Rebuild Logo" />
      <S.DdayText>D+34</S.DdayText>
      <S.ReasonCardPart />
    </S.Wrapper>
  );
}
