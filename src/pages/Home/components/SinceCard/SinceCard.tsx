import * as S from "@/pages/Home/components/SinceCard/SinceCard.style";

import sinceBg from "@/assets/since_broken.svg";
import sinceLogo from "@/assets/Rebuild_logo_3.svg";

interface SinceCardProps {
  dDayText: string;
  daysSince: number;
  breakupDate: string;
}

export default function SinceCard({ daysSince }: SinceCardProps) {
  return (
    <S.Wrapper>
      <S.TodoCardPart />
      <S.BgImage src={sinceBg} alt="배경" />
      <S.LogoImage src={sinceLogo} alt="Rebuild Logo" />

      <S.DdayText>D+{daysSince}</S.DdayText>

      <S.ReasonCardPart />
    </S.Wrapper>
  );
}
